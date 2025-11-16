import styled from "styled-components";
import closePng from "../../assets/btn_delete_24px.png";
import backPng from "../../assets/icj_arrow_left2.png";

export const Container = styled.div`
  display: grid;
  position: fixed;
  z-index: 999;
  inset: 0;
  background: rgb(0 0 0 / 70%);
  place-items: center;

  @media (width <= 524px) {
    background: rgb(2 0 14 / 100%);
    display: block;
  }
`;

export const Modal = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 693px;
  margin: 0 auto;
  padding: 24px;

  color: #fff;
  max-width: 524px;
  background: #181d26;
  flex-direction: column;
  border-radius: 16px;

  @media (width <= 524px) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    max-width: none;
    border-radius: 0;
    padding: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  padding-bottom: 34px;
  justify-content: space-between;

  @media (width <= 524px) {
    display: none;
  }
`;

export const MobileHeader = styled.div`
  display: none;

  @media (width <= 524px) {
    display: flex;
    width: 100%;
    height: 44px;
    justify-content: space-between;
  }
`;

export const Rbox = styled.div`
  display: none;

  @media (width <= 524px) {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const BackBtn = styled.button`
  background-image: url(${backPng});
  background-repeat: no-repeat;
  display: none;
  width: 24px;
  height: 24px;
  background-size: contain;

  @media (width <= 524px) {
    display: block;
  }
`;

export const Title = styled.h2`
  margin: 0;

  font-weight: 500;
  font-size: 18px;

  @media (width <= 524px) {
    font-size: 14px;
  }
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: 0;

  color: #fff;
  font-size: 24px;
  cursor: pointer;
  appearance: none;
  background: transparent url(${closePng}) no-repeat center / contain;
`;

export const List = styled.div`
  flex: 1;
  width: 100%;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &:-webkit-scrollbar {
    display: none;
  }

  @media (width <= 524px) {
    height: 100%;
  }
`;

export const Vote = styled.div`
  width: 100%;

  text-align: center;

  @media (width <= 524px) {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    height: 106px;
    background: transparent;
    pointer-events: none;
  }
`;

export const TransparentOverlay = styled.div`
  @media (width <= 524px) {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    height: 106px;
    background: rgb(2 0 14 / 80%);
    pointer-events: none;
  }
`;

export const Votebtn = styled.button`
  width: 100%;
  height: 42px;
  margin: 20px 0 12px;
  border: 0;

  color: #fff;
  font-size: 14px;
  cursor: pointer;
  background: linear-gradient(90deg, rgb(248 111 101 / 100%) 0%, rgb(254 84 147 / 100%) 100%);
  border-radius: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  @media (width <= 524px) {
    width: calc(100% - 32px);
    height: 44px;
    margin: 16px 0;

    font-size: 15px;
    pointer-events: auto;
  }
`;

export const VoteNotice = styled.p`
  margin: 0;

  font-size: 12px;
`;
export const Credit = styled.span`
  color: rgb(249 109 105 / 100%);
`;
