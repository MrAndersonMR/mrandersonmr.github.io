import React, { useEffect, useState } from "react";
import SecProfile from "../components/sections/secProfile";

// import { useRouter } from "next/router";

import { User } from "../interfaces";
import SecLayoutPage from "../components/sections/secLayoutPage";

function ProfilePage() {
  // const router = useRouter();
  // const userId = router.query;

  const [user, setUser] = useState<User>();

  useEffect(() => {
    JSON.parse(localStorage.getItem("users")).map((item: User) => {
      if (item.token !== "") setUser(item);
      console.log(item);
    });
  }, []);

  return user ? (
    <SecLayoutPage>
      <SecProfile user={user} />
    </SecLayoutPage>
  ) : (
    <></>
  );
}

export default ProfilePage;
