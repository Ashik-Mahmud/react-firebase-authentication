import React from "react";
import { FiEdit } from "react-icons/fi";
import { GoTrashcan } from "react-icons/go";
import styled from "styled-components";
const PostList = () => {
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
                <tr>
                  <td>1</td>
                  <td>Why people are ready always?</td>
                  <td>Tech</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </td>
                  <td>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbaBAYz6XaWcBOMw8MpTkIZNSHsKSmUBDW6UhWatEsAxCSZWyjXYFiXuZr7pTvfrifFU&usqp=CAU"
                      alt=""
                    />
                  </td>
                  <td>
                    <span>
                      <FiEdit />
                    </span>
                  </td>
                  <td>
                    <span>
                      <GoTrashcan />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
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
