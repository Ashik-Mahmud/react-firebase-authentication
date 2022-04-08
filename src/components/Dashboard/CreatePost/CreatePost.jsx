import React from "react";
import styled from "styled-components";

export const CreatePost = () => {
  return (
    <section>
      <div className="title">
        <h1>Create Post</h1>
        <p>you will create post here</p>
      </div>
      <CreatePostContainer>
        <div className="card">
          <div className="card-header">
            <h2>Create a Brand new post</h2>
          </div>
          <div className="card-body">
            <form action="#">
              <div className="input-group">
                <label htmlFor="title">Post Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                />
              </div>
              <div className="input-group">
                <label htmlFor="category">Post Category</label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Category"
                />
              </div>
              <div className="input-group">
                <label htmlFor="desc">Post Description</label>
                <textarea
                  name="desc"
                  id="desc"
                  cols="30"
                  rows="10"
                  placeholder="Post Description"
                ></textarea>
              </div>
              <div className="input-group">
                <label htmlFor="file">Upload Post Image</label>
                <input type="file" name="file" id="file" />
              </div>
              <div className="input-group">
                <label htmlFor="button">Action</label>
                <button type="submit" className="btn">
                  Submit Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </CreatePostContainer>
    </section>
  );
};

const CreatePostContainer = styled.div`
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
      padding: 1rem;
      position: relative;
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .input-group {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        position: relative;
        input,
        textarea {
          width: 80%;
          padding: 1rem;
          font-size: 1.1rem;
          font-family: var(--fonts);
          border: 2px solid #ccc;
          outline: none;
          border-radius: 5px;
          &:focus {
            border: 2px solid var(--main-color);
          }
        }
      }
    }
  }
`;
