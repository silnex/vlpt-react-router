import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/profiles/silnex">silnex</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element="유저를 선택해주세요" />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
