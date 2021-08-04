import React from "react";
import styled from "styled-components";
function Contact() {
  return (
    <Container>
      <div className="text__warp h-20  flex items-center justify-center">
        {" "}
        <h1 className="text-5xl uppercase mt-4 text-center  font-bold text-white">
          Contact
        </h1>
      </div>
      <div className="call-to-action flex flex-col text-center justify-center mt-10">
        <span className="text-white text-2xl mb-8">
          [Put your call to action here]
        </span>
        <div className="h-12 flex items-center justify-center ">
          {" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:hariarunengg@email.com"
          >
            <span className="resume">Call to Action</span>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
//----------------------------------------------------------------
const Container = styled.div`
  background: url("https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")
    no-repeat;
  background-position: center;
  background-size: cover;
  height: 500px;
  width: 100vw;
  .resume {
    letter-spacing: 1px;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
    border: 3px solid white;
    transition: all 0.5s ease-out;
    :hover {
      box-shadow: inset 12em 0 #eee;
      /* cursor: pointer; */
      color: #02aab0;
    }
  }

  /* .btn::before {
    content: "";
  } */
  /* clip-path: polygon(0 18%, 100% 1%, 100% 100%, 0% 100%); */
`;

// https://images.unsplash.com/photo-1535868463750-c78d9543614f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80
// background: linear-gradient(135deg, #02aab0, #38dbc0);
