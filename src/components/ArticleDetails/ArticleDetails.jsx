import React, { useEffect, useState } from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useArticles from "../../hooks/useArticles";
const ArticleDetails = () => {
  const [articleDetails, setArticlesDetails] = useState({});
  const navigate = useNavigate();
  const { ArticleId } = useParams();
  const { articles } = useArticles();
  useEffect(() => {
    const desireArticle = articles.find((article) => article.id === ArticleId);
    setArticlesDetails(desireArticle);
  }, [ArticleId, articles]);

  console.log(ArticleId);
  return (
    <ArticleDetailsContainer>
      <div className="header-overlay">
        <span
          title="Go Back Articles"
          onClick={() => navigate(-1)}
          className="back-btn cursor-pointer"
        >
          <BsChevronDoubleLeft />
        </span>
      </div>
      <div className="container">
        <div className="article-container">
          <div className="image">
            {articleDetails?.image ? (
              <img src={articleDetails?.image} alt="pho" />
            ) : (
              <Skeleton height={320} />
            )}
          </div>
          <div className="details">
            <div className="blog-title">
              <h1>{articleDetails?.title || <Skeleton count={1} />}</h1>
              <ul className="meta">
                {articleDetails ? (
                  <li>
                    Data -
                    <span className="colorize">
                      {articleDetails?.createdAt?.toDate()?.toDateString()}
                    </span>
                  </li>
                ) : (
                  <Skeleton count={1} />
                )}
                {articleDetails ? (
                  <li>
                    Author -
                    <span className="colorize">
                      {articleDetails?.author?.name}
                    </span>
                  </li>
                ) : (
                  <Skeleton count={1} />
                )}
              </ul>
            </div>
            <div className="desc">
              <p>{articleDetails?.description || <Skeleton count={30} />}</p>
            </div>
          </div>
        </div>
      </div>
    </ArticleDetailsContainer>
  );
};
const ArticleDetailsContainer = styled.section`
  position: relative;
  padding: 0rem;
  .header-overlay {
    position: relative;
    width: 100%;
    padding: 9rem 0rem;
    background: var(--main-color);
    .back-btn {
      position: absolute;
      color: var(--accent-color);
      font-size: 1.4rem;
      left: 20px;
      top: 5%;
    }
  }
  .article-container {
    position: relative;
    padding: 1rem;
    .image {
      text-align: center;
      width: 600px;
      height: 350px;
      border: 10px solid var(--accent-color);
      margin: -12rem auto;
      z-index: 50;
      position: relative;
      border-radius: 5px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      background: #fff;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .details {
      margin-top: 14rem;
      text-align: center;
      position: relative;
      .blog-title {
        margin: 1rem 0rem;
        .meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 1rem 0rem;
          span {
            font-weight: bold;
          }
        }
      }
      .desc {
        text-align: justify;
        margin: 2rem 0rem;
        font-size: 1.1em;
        line-height: 1.7;
        padding: 0rem 8em;
      }
    }
  }
`;
export default ArticleDetails;
