import React from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const ArticleDetails = () => {
  const navigate = useNavigate();
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
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbaBAYz6XaWcBOMw8MpTkIZNSHsKSmUBDW6UhWatEsAxCSZWyjXYFiXuZr7pTvfrifFU&usqp=CAU"
              alt="pho"
            />
          </div>
          <div className="details">
            <div className="blog-title">
              <h1>Why People are walking on morning why not noon</h1>
              <ul className="meta">
                <li>
                  Data - <span className="colorize">20 Jan, 2022</span>
                </li>
                <li>
                  Author - <span className="colorize">Ashik Mahmud</span>
                </li>
              </ul>
            </div>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                asperiores vero omnis, sequi ipsam accusantium. Corporis magni
                eaque facilis incidunt consequuntur voluptatum quam, eum vitae
                dolores minima consectetur vel adipisci. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Velit illo impedit ab
                inventore provident dignissimos laborum tempore nihil explicabo
                deleniti fugiat, dolorum a obcaecati iusto officiis id est esse
                dicta! Vero eos tempore nihil minus eligendi, dignissimos
                aperiam. Aspernatur, cupiditate! Nobis nemo ad, fuga laudantium
                delectus suscipit totam optio. Dolor ut, labore qui neque illum
                iste in fugit ad rerum deserunt fugiat dolorum laudantium dolore
                iure quos magnam asperiores harum officia, excepturi obcaecati.
                Quaerat esse amet delectus error ipsa placeat maxime dolore
                debitis aliquam quae earum, quos officiis veritatis voluptates
                architecto reprehenderit! Assumenda, provident corporis in optio
                ex porro quos? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Autem doloribus impedit quas, tenetur est
                ratione mollitia in, id exercitationem accusamus dicta possimus
                atque iure nostrum et! Itaque consectetur sed quod neque
                repellat dolores a minus, quas atque maxime veritatis non omnis,
                blanditiis distinctio similique fuga quo totam nesciunt ad!
                Possimus accusamus voluptatem neque eos inventore quisquam
                doloremque culpa quasi! Totam cumque placeat itaque
                necessitatibus magnam a, possimus est sint explicabo quia, nobis
                quam recusandae amet fugit nemo soluta deserunt! Consequatur
                porro voluptatum mollitia, sapiente suscipit laboriosam
                asperiores adipisci rem vero! Fugit praesentium corporis ipsam
                est libero facilis! Tempore cum dignissimos adipisci sit eos
                iusto, praesentium in autem! Praesentium, rem doloremque
                quibusdam aspernatur autem earum ex vel quos. Perferendis autem
                soluta quae sunt repudiandae voluptatem excepturi exercitationem
                rerum omnis error. In distinctio quasi atque. Beatae maxime
                delectus architecto minima ipsa nisi iure, nobis ab illum
                recusandae ratione? Dolores iusto vitae beatae velit quos.
                Voluptatum eos optio vero sit explicabo porro autem accusantium
                nihil expedita ut quam fugit, hic eligendi repudiandae non
                voluptates, velit magnam minima quo officiis, id maxime quas
                nulla culpa. Vero nihil facilis accusantium minus? Iste itaque
                optio corporis velit illum voluptates quis quam nisi amet.
                Mollitia, vitae pariatur!
              </p>
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
