import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useArticles from "../../hooks/useArticles";
import Article from "../Article/Article";
import { auth } from "../Firebase/Firebase.config";
import Loader from "../Loader/Loader";
const Articles = () => {
  const [searchedArticles, setSearchedArticles] = useState([]);
  const [search, setSearch] = useState("");
  const { articles, loading } = useArticles();
  const navigate = useNavigate();
  useEffect(() => {
    setSearchedArticles(articles);
  }, [articles]);

  const handleSearch = () => {
    const filterArticles = articles.filter((article) =>
      article?.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchedArticles(filterArticles);
  };

  return (
    <section id="articles">
      <div className="container">
        <SectionTitle>
          <div className="title">
            <h1>Read Articles</h1>
            <p>read & create articles create greatest artist only.</p>
          </div>
          <div className="search">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              value={search}
              placeholder="Search Articles"
            />
            <button onClick={handleSearch}>
              <BsSearch />
            </button>
          </div>
        </SectionTitle>

        {loading ? (
          searchedArticles.length > 0 ? (
            <ArticleContainer>
              {searchedArticles.map((article) => (
                <Article key={article.id} {...article} />
              ))}
            </ArticleContainer>
          ) : (
            <>
              <NotFoundArticles>
                <img
                  src="https://cdn.dribbble.com/users/2939235/screenshots/7895570/media/a514579499752bed80ba8280eee7cd48.jpg?compress=1&resize=400x300"
                  alt=""
                />
                <h2>There is no Articles Yet</h2>
                {auth?.currentUser?.uid ? (
                  <button
                    className="btn"
                    onClick={() => navigate("/dashboard/create-post")}
                  >
                    Create Your First
                  </button>
                ) : (
                  <button className="btn" onClick={() => navigate("/login")}>
                    Login & Publish Articles
                  </button>
                )}
              </NotFoundArticles>
            </>
          )
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
const NotFoundArticles = styled.div`
  text-align: center;
  padding: 3rem 0rem;
  position: relative;
  button {
    margin: 1rem 0rem;
  }
`;
export default Articles;
