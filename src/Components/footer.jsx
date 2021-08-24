import React from "react";
import styled from "styled-components";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
const Footer = () => {
  return (
    <Container>
      <Wrap>
        {/* Scroll to home page */}
        <a href="#home">
          <ExpandLessIcon className="up-arrow mt-10 cursor-pointer" />
        </a>
        <div className="social mt-10 border-b h-20 border-gray-500">
          {/* Social media icons */}
          <a href="https://www.instagram.com/magesh2707/">
            <InstagramIcon className="icon cursor-pointer" />
          </a>

          <a href=" https://www.youtube.com/channel/UC1zqdMfeUrBiotaJcwPSUDA">
            <YouTubeIcon className="icon cursor-pointer" />
          </a>
          <a href="https://github.com/mageshyt">
            <GitHubIcon className="icon cursor-pointer" />
          </a>
        </div>
      </Wrap>
    </Container>
  );
};

export default Footer;

//----------------------------------------------------------------
const Container = styled.div`
  height: 300px;
  width: 100%;
  background: #2b2b2b;

  .up-arrow {
    color: #fff;
    font-size: 35px;
    transition: all 0.5s;
    :hover {
      transform: translateY(-5px);
    }
  }
`;

//----------------------------------------------------------------
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .social {
    color: #fff;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .icon {
      font-size: 40px;
      transition: all 0.3s;
      :hover {
        transform: translateY(-5px);
      }
    }
  }
`;
