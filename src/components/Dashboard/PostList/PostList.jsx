import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { GoTrashcan } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useArticles from "../../../hooks/useArticles";
import { auth, db, storage } from "../../Firebase/Firebase.config";
const PostList = () => {
  const [postedArticles, setPostedArticles] = useState([]);
  const { articles } = useArticles();
  const navigate = useNavigate();
  useEffect(() => {
    const currentUserArticles = articles.filter(
      (article) => article.author.uid === auth.currentUser.uid
    );
    setPostedArticles(currentUserArticles);
  }, [articles]);

  /* handle delete doc  */
  const handlePostDelete = async (id, image) => {
    if (window.confirm("Do you want to delete it?")) {
      const deleteDocRef = doc(db, "articles", id);
      await deleteDoc(deleteDocRef);
      const filteredOut = articles.filter((article) => article?.id !== id);
      setPostedArticles(filteredOut);
      const deleteImageRef = ref(storage, image);
      await deleteObject(deleteImageRef)
        .then(() => {
          toast.success("User Delete Successfully.");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section>
      <div className="title">
        <h1>Post List</h1>
        <p>You will see all the post here</p>
      </div>
      <PostListContainer>
        <div className="card">
          <div className="card-header">
            <h2>All Post List</h2>
          </div>
          <div className="card-body">
            {postedArticles.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Short Description</th>
                    <th>Image</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {postedArticles.map((article) => (
                    <tr key={article.id}>
                      <td title={article?.id}>
                        {article?.id.length > 6
                          ? article?.id?.slice(0, 6) + "..."
                          : article.id}
                      </td>
                      <td title={article?.title}>
                        {article?.title.length > 30
                          ? article?.title.slice(0, 30) + "..."
                          : article?.title}
                      </td>
                      <td>
                        {article?.category ? article.category : "Not Available"}
                      </td>
                      <td title={article?.description}>
                        {article?.description.length > 50
                          ? article?.description.slice(0, 50) + "...."
                          : article?.description}
                      </td>
                      <td>
                        <img src={article?.image} alt="" />
                      </td>
                      <td title="Not Available">
                        <span className="disabled">
                          <FiEdit />
                        </span>
                      </td>
                      <td>
                        <span
                          onClick={() =>
                            handlePostDelete(article?.id, article?.image)
                          }
                        >
                          <GoTrashcan />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>
                No Post published yet.{" "}
                <span
                  onClick={() => navigate("/dashboard/create-post")}
                  className="colorize cursor-pointer bold"
                >
                  Create
                </span>
              </p>
            )}
          </div>
        </div>
      </PostListContainer>
    </section>
  );
};

const PostListContainer = styled.div`
  position: relative;
  padding: 4rem;
  .card {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
    padding: 2rem;
    border-radius: 5px;
    .card-header {
      padding: 1rem;
      background: #f8f8f8;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
    .card-body {
      position: relative;
      table {
        width: 100%;
        text-align: left;
        border-collapse: collapse;
        th,
        td {
          padding: 0.6rem;
          border-bottom: 1px solid #ccc;
          img {
            width: 70px;
            height: 70px;
            border-radius: 5px;
            object-fit: cover;
          }
          span {
            cursor: pointer;
            font-size: 1.5rem;
            text-align: center;
          }
          &:last-child span {
            color: salmon;
          }
        }
      }
    }
  }
`;
export default PostList;
