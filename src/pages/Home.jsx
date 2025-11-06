import { getChartList } from "@/api/chartClient";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    getChartList("female", {
      params: { page: 1, size: 10 },
    }).then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <>
      <div>나는 홈페이지임</div>
    </>
  );
}

export default Home;
