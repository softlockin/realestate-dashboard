import { useGetIdentity, useOne } from "@pankod/refine-core";

import { Profile } from "components";

const MyProfile = () => {
  const { data: user } = useGetIdentity(); //gets our user data that we loged in with using google
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const myProfile = data?.data ?? []; // if we don't have the data it defaults to [] so its never undefined to ts

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <Profile
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};

export default MyProfile;
