"use client";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const handleEdit = () => {};

const handleDelete = async () => {};

const MyProfile = () => {
  const { data: session } = useSession();

  const [allPosts, setallPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${session?.user?.id}/posts`);
    const data = await response.json();
    setallPosts(data);
  };

  useEffect(() => {
    if (session?.user?.id) fetchPosts();
  }, []);

  return (
    <Profile
      name="My"
      desc="Prompts so far..."
      data={allPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
