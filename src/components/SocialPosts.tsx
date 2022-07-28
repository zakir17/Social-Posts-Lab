import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Steak", thought: "Phenomenal" },
    { title: "Lasagna", thought: "Damn, that was good" },
    { title: "React", thought: "Its hard until it gets easier" },
  ]);

  const deletePost = (index: number): void => {
    setPosts((prev) => {
      const newList: Post[] = prev.slice(0);
      newList.splice(index, 1);
      return newList;
    });
  };

  const addPost = (post: Post): void => {
    setPosts((prev) => {
      const newlist: Post[] = prev.slice(0);
      newlist.unshift(post);
      return newlist;
    });
  };

  return (
    <div className="SocialPosts">
      <PostForm onAdd={addPost} />
      <ul>
        {posts.map((item, index) => (
          <PostInList
            post={item}
            onDelete={() => deletePost(index)}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default SocialPosts;
