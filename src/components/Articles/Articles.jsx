import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import useArticles from "../../hooks/useArticles";
import Article from "../Article/Article";
import Loader from "../Loader/Loader";
const Articles = () => {
  const { articles, loading } = useArticles();

  return (
    <section id="articles">
      <div className="container">
        <SectionTitle>
          <div className="title">
            <h1>Read Articles</h1>
            <p>read & create articles create greatest artist only.</p>
          </div>
          <div className="search">
            <input type="search" placeholder="Search Articles" />
            <button>
              <BsSearch />
            </button>
          </div>
        </SectionTitle>
        {loading ? (
          <ArticleContainer>
            {articles.map((article) => (
              <Article key={article.id} {...article} />
            ))}
          </ArticleContainer>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};
const SectionTitle = styled.div`
  padding: 0.5rem 1rem;
  position: relative;
  background: #f8f8f8;
  border-radius: 4px;
  margin: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .search {
    display: flex;
    align-items: stretch;
    background-color: var(--accent-color);
    padding: 0.4rem;
    width: min(100% - 2rem, 400px);
    input {
      border: none;
      outline: none;
      font-size: 1rem;
      font-family: var(--fonts);
      padding: 0.6rem;
      width: 100%;
    }
    button {
      padding: 0rem 1.2rem;
      border: none;
      outline: none;
      background-color: var(--main-color);
      color: var(--accent-color);
      cursor: pointer;
    }
  }
`;

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  position: relative;
  grid-gap: 1rem;
`;
export default Articles;
