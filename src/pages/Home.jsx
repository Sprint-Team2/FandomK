import useCredit from "@/hooks/useCredit";

function Home() {
  const { credit, resetCredit, addCredit, subtract } = useCredit();

  return (
    <>
      <div>나는 홈페이지임</div>
      <button onClick={() => addCredit(10)}>10설정 버튼</button>
      <button onClick={() => addCredit(100)}>100설정 버튼</button>
      <button onClick={() => addCredit(400)}>400설정 버튼</button>
      <br />
      <button onClick={() => subtract(10)}>10설정 버튼</button>
      <button onClick={() => subtract(100)}>10설정 버튼</button>
      <button onClick={() => subtract(400)}>100설정 버튼</button>
      <br />

      <br />
      <button onClick={() => console.log(credit)}>가져오기 버튼</button>
      <button onClick={() => resetCredit()}>삭제 버튼</button>
      {credit}
    </>
  );
}

export default Home;
