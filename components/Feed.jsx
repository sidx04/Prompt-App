"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setsearchText] = useState("");
  const [allPosts, setallPosts] = useState([]);

  const handleSearchChange = (e) => {};

  const handleTagClick = (e) => {};

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setallPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // transform from array to object
  const promptCards = allPosts.map((post) => (
    <PromptCard post={post} handleTagClick={() => {}} />
  ));

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username..."
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {promptCards}
    </section>
  );
};

export default Feed;
