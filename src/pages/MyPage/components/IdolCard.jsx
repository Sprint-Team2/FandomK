import MypageDelete from "@/assets/svg/MypageDeleteSvg";
import * as S from "./IdolCard.style";

const IdolCard = ({
  idol,
  size = "large",
  onRemove,
  showDeleteButton = false,
  selected = false,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(idol.id);
    }
  };

  return (
    <S.CardContainer onClick={handleClick} $clickable={!!onClick}>
      {/* 이미지 영역 */}
      <S.ImageWrapper $size={size} $selected={selected}>
        <S.IdolImage $size={size} src={idol.profileImage} alt={idol.name} />

        {/* 삭제 버튼 */}
        {showDeleteButton && (
          <S.DeleteButton
            onClick={(e) => {
              e.stopPropagation();
              onRemove(idol.id);
            }}
            aria-label="삭제"
          >
            <MypageDelete />
          </S.DeleteButton>
        )}

        {/* 체크 표시 */}
        {selected && (
          <S.CheckIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#F96D69" />
              <path
                d="M6 12L10 16L18 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </S.CheckIcon>
        )}
      </S.ImageWrapper>

      {/* 텍스트 영역 */}
      <S.InfoSection>
        <S.MemberName>{idol.name}</S.MemberName>
        <S.GroupName>{idol.group}</S.GroupName>
      </S.InfoSection>
    </S.CardContainer>
  );
};

export default IdolCard;
