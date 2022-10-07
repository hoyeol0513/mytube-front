import React from "react";
import { Link, useNavigate } from "react-router-dom";
//useNavigate를 이용해서 link 컴포넌트를 대체할 수 있음 (props 도 넘길 수 있음.)
const Header = () => {
  const navigate = useNavigate();
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
                <Link to={"/about/1"}>Profile</Link>
              </li>
              <li>
                <div>Settings</div>
              </li>
              <li>
                <div
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Logout
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <button className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"><path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"><path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button> */
}
