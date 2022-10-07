import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../utils";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <form
        className="flex flex-col w-60 p-4 "
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const data = await axios({
              url: `${BACKEND_URL}/user/login`,
              method: "POST",
              data: {
                email,
                password,
              },
            });
            setEmail("");
            setPassword("");
            alert("로그인 성공");
            console.log(data);
          } catch (err) {
            console.log(err);
            alert("로그인 실패");
          }
        }}
      >
        <div>로그인</div>
        <div className="mt-4">email을 입력해주세요.</div>
        <input
          type="email"
          className="w-full border-2 border-black"
          placeholder="email 입력"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="mt-4">비밀번호를 입력해주세요.</div>
        <input
          type="password"
          className="w-full border-2 border-black"
          placeholder="password 입력"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-sm ml-auto mt-5">
          전송
        </button>
      </form>
    </div>
  );
};

export default Login;
