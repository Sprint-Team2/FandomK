import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      {/* 나는 루트 레이아웃임 */} <Outlet />
    </>
  );
};

export default RootLayout;
