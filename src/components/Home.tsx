"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
import Navbar from "@/components/Navbar";
// import MainHeader from "./MainHeader";

gsap.registerPlugin(CSSPlugin);

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false); // State to control navbar visibility

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1; // Increment the counter
        } else {
          clearInterval(count); // Clear the interval
          reveal(); // Call the reveal function
          return 100; // Ensure the counter is set to 100
        }
      });
    }, 25);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(count);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("loading completed");
        setNavbarVisible(true); // Show navbar after loading
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".title-lines", {
        display: "block",
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.0,
      });
  };

  return (
    // <Navbar />
    <AppContainer>
      <Loading>
        <Follow className="follow" />
        <ProgressBar
          className="hide"
          id="progress-bar"
          style={{ width: counter + "%" }}
        />
        {/* Conditionally render the counter only if it's greater than 0 */}
        {counter > 0 && (
          <Count id="count" className="hide">
            {counter}%
          </Count>
        )}
      </Loading>

      <Content className="content">
        <div className="title-lines hidden">
          {navbarVisible && <Navbar />} {/* Render navbar only when visible */}
        </div>
      </Content>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const Follow = styled.div`
  position: absolute;
  background-color: #f7f6f5;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Count = styled.p`
  position: absolute;
  font-size: 130px;
  color: #fff;
  transform: translateY(-15px);
  font-weight: 500;
`;

const Content = styled.div`
  height: 100%;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  overflow: hidden;
`;
