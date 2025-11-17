import styled from "styled-components";

// 이미지 사이즈 상수
export const IMAGE_SIZES = {
  small: 86,
  large: 115,
};

// wrapper 사이즈 (이미지 + 여백)
export const WRAPPER_SIZES = {
  small: 100,
  large: 128,
};

// 카드 전체 컨테이너
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};

  &:hover {
    opacity: ${(props) => (props.$clickable ? "0.9" : "1")};
  }
`;

// 이미지 wrapper (외곽 border)
export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: ${(props) => WRAPPER_SIZES[props.$size]}px;
  border: 1.31px solid ${(props) => (props.$selected ? "#F96D69" : "#f96868")};
  aspect-ratio: 1;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.$selected ? "0.7" : "1")};
`;

// 아이돌 이미지
export const IdolImage = styled.img`
  width: ${(props) => IMAGE_SIZES[props.$size]}px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
`;

// 삭제 버튼
export const DeleteButton = styled.button`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  width: 31px;
  height: 31px;
  padding: 0;
  border: 2.8px solid #02000e;

  background-color: #fff;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// 체크 아이콘
export const CheckIcon = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

// 텍스트 정보 섹션
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

// 멤버 이름
export const MemberName = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`;

// 그룹 이름
export const GroupName = styled.div`
  padding: 0 12px;

  color: rgb(255 255 255 / 60%);
  font-weight: 400;
  font-size: 14px;
`;
