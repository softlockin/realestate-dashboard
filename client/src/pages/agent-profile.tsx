import { useOne } from "@pankod/refine-core";
import { useParams } from "@pankod/refine-react-router-v6";

import { Profile } from "components";
import { agent } from "assets";

const AgentProfile = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string,
  });

  console.log(data);

  const myProfile = data?.data ?? []; // if we don't have the data it defaults to [] so its never undefined to ts

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <Profile
      type="Agent"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar ? myProfile.avatar : agent}
      properties={myProfile.allProperties}
    />
  );
};

export default AgentProfile;
