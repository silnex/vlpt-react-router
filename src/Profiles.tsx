import { Link, NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = ({ isActive }: { isActive: boolean }) => {
    return isActive ? { background: "black", color: "white" } : {};
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink style={activeStyle} to="/profiles/silnex">
            silnex
          </NavLink>
        </li>
        <li>
          <NavLink style={activeStyle} to="/profiles/velopert">
            velopert
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element="유저를 선택해주세요" />
        <Route path=":username" element={<Profile />} />
      </Routes>

      <WithRouterSample />
    </div>
  );
};

export default Profiles;
