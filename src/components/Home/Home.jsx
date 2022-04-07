import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <div className="container">
        <div className="blog-container">
          <div className="blog-text">
            <h3>Get gether knowledge to read some of blogs</h3>
            <h1>
              Read Blog <span className="colorize">Gether Knowledge</span>
            </h1>
            <p>
              Here you will read much of blogs which one make of your brain tons
              of faster than other so regularly reading blog make you poet and
              write your own poetry.
            </p>
            <button className="btn">Read Blogs</button>
          </div>
          <div className="blog-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YJ4XS4l-5lo3o9z18TcTiG9uCLqn3eJBnO5v6xiuICiO9Sfjr0Jf_6QQAry-gHHwdWA&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};
const HomeContainer = styled.section`
  position: relative;
  .blog-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    min-height: 90vh;
    gap: 2rem;
    .blog-text {
      flex: 1;
      h1 {
        font-size: 4rem;
        font-weight: 800;
      }
      p {
        line-height: 1.7;
        margin: 1rem 0rem;
        font-size: 1rem;
      }
    }
    .blog-image {
      flex: 1;
      img {
        width: 80%;
      }
    }
  }
`;
export default Home;
