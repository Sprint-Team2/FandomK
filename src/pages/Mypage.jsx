import styled from "styled-components";

const Mypage = () => {
  return (
    <>
      <header>
        <div>fandomK 헤더</div>
      </header>
      <MypageContainer>
        {/* 내가 관심있는 아이돌 섹션 */}
        <FavoriteSection>
          <SectionTitle>내가 관심있는 아이돌</SectionTitle>
          <FavoriteIdolsList>{/* 선택된 아이돌 카드들 */}</FavoriteIdolsList>
        </FavoriteSection>

        {/* 구분선 */}
        <Divider />

        {/* 관심 있는 아이돌 추가 섹션 */}
        <AddIdolsSection>
          <SectionTitle>관심 있는 아이돌들을 추가해보세요.</SectionTitle>
          <IdolsGrid>{/* 아이돌 카드들 */}</IdolsGrid>
        </AddIdolsSection>
      </MypageContainer>
    </>
  );
};

// 전체 컨테이너 - max-width 1200px, flex column, gap 40px
const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 76px;
  background-color: #1a1a2e;
`;

// 섹션 공통
const FavoriteSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #16213e;
`;

const AddIdolsSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #0f3460;
`;

// 섹션 제목 - 아래 마진 32px
const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 32px;
  background-color: #e94560;
`;

// 내가 관심있는 아이돌 리스트
const FavoriteIdolsList = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  background-color: #533483;
  padding: 20px;
  min-height: 100px;
`;

// 구분선
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
`;

// 아이돌 그리드
const IdolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  background-color: #2c6e49;
  min-height: 200px;
`;

export default Mypage;
