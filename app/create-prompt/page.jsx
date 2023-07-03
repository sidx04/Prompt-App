"use client";

import Form from "@components/Form";
import React, { useState } from "react";

const CreatePrompt = () => {
  const [submitting, setsubmitting] = useState(false);
  const [post, setpost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {};

  return (
    <Form
      type="Create"
      post={post}
      setpost={setpost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
