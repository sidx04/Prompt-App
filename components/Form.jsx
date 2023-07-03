import Link from "next/link";
import React from "react";

const Form = ({ type, post, setpost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span>{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing AI-generated prompts!
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI prompt:
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setpost({ ...post, prompt: e.target.value })}
            required
            placeholder="Write your prompt here..."
            className="form_textarea"
          ></textarea>
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tags: {` `}
            <span className="font-normal">(#product, #idea, #ai)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setpost({ ...post, tag: e.target.value })}
            required
            placeholder="Write your tag here..."
            className="form_input"
          ></input>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <button className="px-5 py-1.5 text-sm bg-red-600 rounded-full">
            <Link href="/" className="text-white">
              {" "}
              Cancel
            </Link>
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-lime-500 rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
