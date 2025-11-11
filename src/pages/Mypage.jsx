import { useState, useEffect } from "react";
import IdolCard from "@/components/mypage/IdolCard";
import MypageAdd from "../assets/Mypage_add";
import MypageArrow from "../assets/Mypage_arrow";
import * as S from "./Mypage.style";

// 테스트 데이터 - 전체 아이돌 목록
const TEST_IDOLS = [
  {
    id: 1,
    name: "린",
    group: "메이브",
    profileImage: "/placeholder.png",
  },
  {
    id: 2,
    name: "로제",
    group: "블랙핑크",
    profileImage: "/placeholder.png",
  },
  {
    id: 3,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 4,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 5,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 6,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 7,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 8,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 9,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 10,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 11,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 12,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 13,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 14,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 15,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 16,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 17,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 18,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 19,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 20,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
];

const IDOLS_PER_PAGE = 16; // 8열 2행

const Mypage = () => {
  // 상태 관리: 사용자가 선택한 관심 아이돌 ID 목록
  const [selectedIdols, setSelectedIdols] = useState([1, 2]); // 초기값: 테스트용으로 1, 2번 선택

  // 추가하려고 선택 중인 아이돌 ID 목록
  const [selectedIds, setSelectedIds] = useState([]);

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(0);

  // 선택된 아이돌 객체 배열 가져오기
  const favoriteIdols = TEST_IDOLS.filter((idol) => selectedIdols.includes(idol.id));

  // 추가 가능한 아이돌 (이미 관심 아이돌에 없는 것만)
  const availableIdols = TEST_IDOLS.filter((idol) => !selectedIdols.includes(idol.id));

  // 현재 페이지의 아이돌들
  const currentPageIdols = availableIdols.slice(
    currentPage * IDOLS_PER_PAGE,
    (currentPage + 1) * IDOLS_PER_PAGE
  );

  // 전체 페이지 수
  const totalPages = Math.ceil(availableIdols.length / IDOLS_PER_PAGE);

  // 관심 아이돌 삭제 핸들러
  const handleRemoveIdol = (idolId) => {
    setSelectedIdols((prev) => prev.filter((id) => id !== idolId));
  };

  // 아이돌 선택/해제 핸들러
  const handleSelectIdol = (idolId) => {
    setSelectedIds((prev) =>
      prev.includes(idolId) ? prev.filter((id) => id !== idolId) : [...prev, idolId]
    );
  };

  // 추가하기 버튼 핸들러
  const handleAddIdols = () => {
    if (selectedIds.length === 0) return;

    setSelectedIdols((prev) => [...prev, ...selectedIds]);
    setSelectedIds([]); // 선택 상태 초기화
  };

  // 이전 페이지
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // 다음 페이지
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <S.MypageContainer>
        {/* 내가 관심있는 아이돌 섹션 */}
        <S.FavoriteSection>
          <S.SectionTitle>내가 관심있는 아이돌</S.SectionTitle>
          <S.FavoriteIdolsList>
            {favoriteIdols.length > 0 ? (
              favoriteIdols.map((idol) => (
                <IdolCard
                  key={idol.id}
                  idol={idol}
                  size="small"
                  showDeleteButton={true}
                  onRemove={handleRemoveIdol}
                />
              ))
            ) : (
              <S.EmptyMessage>관심 아이돌을 추가해보세요!</S.EmptyMessage>
            )}
          </S.FavoriteIdolsList>
        </S.FavoriteSection>

        {/* 구분선 */}
        <S.Divider />

        {/* 관심 있는 아이돌 추가 섹션 */}
        <S.AddIdolsSection>
          <S.SectionTitle>관심 있는 아이돌들을 추가해보세요.</S.SectionTitle>
          <S.IdolsGridContainer>
            {/* 좌측 화살표 버튼 */}
            <S.ArrowButton onClick={handlePrevPage} disabled={currentPage === 0}>
              <MypageArrow />
            </S.ArrowButton>

            {/* 아이돌 그리드 */}
            <S.IdolsGrid>
              {currentPageIdols.map((idol) => (
                <IdolCard
                  key={idol.id}
                  idol={idol}
                  size="large"
                  selected={selectedIds.includes(idol.id)}
                  onClick={() => handleSelectIdol(idol.id)}
                />
              ))}
            </S.IdolsGrid>

            {/* 우측 화살표 버튼 */}
            <S.ArrowButton
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              $isRight
            >
              <MypageArrow />
            </S.ArrowButton>
          </S.IdolsGridContainer>

          {/* 추가하기 버튼 */}
          <S.AddButton onClick={handleAddIdols} disabled={selectedIds.length === 0}>
            <MypageAdd />
            <span>추가하기</span>
          </S.AddButton>
        </S.AddIdolsSection>
      </S.MypageContainer>
    </>
  );
};

export default Mypage;
