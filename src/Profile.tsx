import { useParams } from "react-router-dom";

interface Profile {
  name: string;
  description: string;
}

const profileData: { [key: string]: Profile } = {
  silnex: {
    name: "Lee SeungHyun",
    description: "Hello World",
  },
  velopert: {
    name: "김민준",
    description:
      "Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자",
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = profileData[username ?? ""];

  if (!profile) return <div>존재하지 않는 사용자입니다.</div>;

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
