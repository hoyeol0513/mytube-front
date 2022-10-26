import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../recoil";
//useNavigate를 이용해서 link 컴포넌트를 대체할 수 있음 (props 도 넘길 수 있음.)
const Header = () => {
  const navigate = useNavigate();
  // const isLogined = false;
  const [user, setUser] = useRecoilState(userState); //set함수를 안쓰려면 useRecoilValue만
  return (
    <header>
      <div className="navbar flex justify-between bg-base-100 border-b shadow-md">
        {/* 왼쪽 부분  : logo & link */}
        <div className="">
          <div
            className="btn btn-ghost normal-case text-xl hover:bg-transparent"
            onClick={() => {
              navigate("/");
            }}
          >
            <i class="fi fi-brands-youtube text-red-500 mt-2"></i>
            <div className="ml-2">MyTube</div>
          </div>
        </div>

        {/* 가운데 부분 : input bar */}
        <div className="flex-1 justify-center gap-2 ml-auto">
          <div className="form-control w-1/3 ">
            <form
              className="inline-flex"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Search.."
                className="input rounded-none input-md w-full border-gray-300"
                onChange={() => {}}
              />
              <button className="btn btn-ghost rounded-none border-gray-300 w-13 ">
                검색
              </button>
            </form>
          </div>
        </div>

        {/* 오른쪽 부분 : 사용자 프로필 avartar & dropdown & Login/out */}
        <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="profile" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={`/users/${user.id}`}>Profile</Link>
                </li>
                <li>
                  <div>Settings</div>
                </li>
                <li>
                  <div
                    onClick={() => {
                      setUser(null);
                      navigate("/");
                    }}
                  >
                    Logout
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-3">
              <div>
                <Link to="/join">회원가입</Link>
              </div>
              <div className="mr-3">
                <Link to="/login">로그인</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
