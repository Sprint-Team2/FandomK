import credit from "@/assets/imgs/credit.png";
import Modal from "../common/Modal";
import * as S from "./DonationModal.style";

const DonationModal = ({ isOpen, onClose, content }) => {
  if (!content) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="후원하기">
      <S.ChildrenWrapper>
        <img src={content.idol.profilePicture} alt={content.idol.name} />
        <S.TitleWrapper>
          <S.SubTitle>{content.subtitle}</S.SubTitle>
          <S.Title>{content.title}</S.Title>
        </S.TitleWrapper>
        <S.FormContainer>
          <S.InputWrapper>
            <input placeholder="크레딧 입력" />
            <img src={credit} alt="크레딧" />
          </S.InputWrapper>
          <S.SubmitButton disabled={true}>후원하기</S.SubmitButton>
        </S.FormContainer>
      </S.ChildrenWrapper>
    </Modal>
  );
};

export default DonationModal;
