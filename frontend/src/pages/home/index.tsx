/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GetPostResponse } from '@/utils/models/Post';
import { useNavigate } from 'react-router-dom';

const postItemStyles = css`
  padding: 20px;
  border-top: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eee;
  }

  h2 {
    padding-bottom: 10px;
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const [postList, setPostList] = useState<GetPostResponse[]>([
    {
      id: 0,
      title: '',
      content: '',
      update_dttm: '',
    },
  ]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get('http://localhost:8000/post', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setPostList(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2
        css={css`
          margin-bottom: 30px;
        `}
      >
        Home
      </h2>

      <ul>
        {postList.map((post) => (
          <li
            key={post.id}
            css={postItemStyles}
            onClick={() => {
              navigate(`/post/${post.id}`);
            }}
          >
            <h2>{post.title}</h2>

            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
