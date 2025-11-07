import axios from "axios";

const client = axios.create({
  timeout: 3000,
  baseURL: "https://fandom-k-api.vercel.app/20-2",
});

const onResponse = (res) => {
  // 응답을 받은 후 처리할 작업
  return res;
};

const onError = (error) => {
  const errorCode = error.status;
  switch (errorCode) {
    case 400:
      alert("400에러 잘못된 요청");
      break;
    case 401:
      alert("401에러 인증 실패");
      break;
    case 403:
      alert("403에러 권한 없음");
      break;
    case 404:
      alert("404에러 리소스 없음");
      break;
    case 409:
      alert("409에러 충돌");
      break;
    case 500:
      alert("500에러 서버 내부 오류(예외 발생)");
      break;
    case 503:
      alert("503에러 서비스 불가");
      break;
    default:
      alert(error.message || "알 수 없는 에러가 발생했습니다.");
      break;
  }

  return Promise.reject(error);
};

client.interceptors.response.use(onResponse, onError);

export default client;
