import styled from "styled-components";
import FeaturePic from "../../images/bestTea2.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    display: flex;
    width: 90%;
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 10rem;
    letter-spacing: 3px;
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;