import { Get } from "@/api/client";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    Get("/charts/female", {
      params: { gender: "female", pageSize: "10" },
    }).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <div>나는 홈페이지임</div>
    </>
  );
}

export default Home;
