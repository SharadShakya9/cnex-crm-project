import React from "react";
import styled from "styled-components";
import Logos from "../../shared/components/Logo";
import { Link } from "react-router-dom";
import "./Home.css";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const Home = () => {
  return (
    <Container>
      <Logos />

      <div className="border"></div>

      <Link className="link" to="/cnex">
        <button className="continue_btn">
          <div className="text">
            <span>Click</span>
            <span>to</span>
            <span>continue ....</span>
          </div>
          <div className="clone">
            <span>Click</span>
            <span>to</span>
            <span>continue ....</span>
          </div>
          <svg
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </Link>
    </Container>
  );
};

export default Home;
