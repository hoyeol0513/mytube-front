import React from "react";

const Join = () => {
  return (
    <div className="flex flex-col w-60 p-4 items-start">
      <div>회원가입</div>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("send");
        }}
      >
        <div className="mt-4">email을 입력해주세요.</div>
        <input
          type="email"
          className="w-full border-2 border-black"
          placeholder="email 입력"
        />
        <div className="mt-4">닉네임을 입력해주세요.</div>
        <input
          type="text"
          className="w-full border-2 border-black"
          placeholder="닉네임 입력"
        />
        <div className="mt-4">비밀번호를 입력해주세요.</div>
        <input
          type="password"
          className="w-full border-2 border-black"
          placeholder="password 입력"
        />
        <button className="btn btn-sm mr-auto mt-5">전송</button>
      </form>
    </div>
  );
};

export default Join;
