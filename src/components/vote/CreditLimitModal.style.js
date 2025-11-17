import styled from "styled-components";
import credit_icon from "../../assets/credit_113px.png";
import closePng from "../../assets/btn_delete_24px.png";
export const Overlay = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  inset: 0;
  background: rgb(0 0 0 / 60%);
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  display: flex;
  position: relative;
  width: 339px;
  height: 330px;
  background: rgb(24 29 38 / 100%);
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.div`
  width: 133px;
  height: 113px;
  background-image: url(${credit_icon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 56px 24px 0;
`;

export const Message = styled.p`
  margin-top: 31px;

  color: #fff;
  font-size: 16px;
  line-height: 1.5;

  span {
    color: #f77;
    font-weight: 600;
  }
`;

export const ConfirmButton = styled.button`
  width: 295px;
  height: 42px;
  margin-top: 31px;
  border: none;

  color: #fff;
  font-weight: 600;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;

  background: linear-gradient(90deg, #f86f65 0%, #fe5493 100%);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 16px;
  width: 24px;
  height: 24px;
  border: none;
  background-image: url(${closePng});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;
