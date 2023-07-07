"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex flex-1 justify-start items-center gap-3 cursor-pointer"
          onClick={handleTagClick}
        >
          <Image
            src={post.userID.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3>{post.creator.username}</h3>
          <p>{post.creator}</p>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
