import { useLocation, useMatch, useNavigate, useParams } from "react-router-dom";

const WithRouterSample = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const match = useMatch('/profiles/:username');

  return (
    <div>
      <h4>Location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h4>Match</h4>
      <textarea value={JSON.stringify(match, null, 2)} readOnly />
      <h4>Params</h4>
      <textarea value={JSON.stringify(params, null, 2)} readOnly />
      <button onClick={() => navigate("/")}>홈으로</button>
    </div>
  );
};

export default WithRouterSample;
