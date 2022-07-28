import Post from "../models/Post";
import "./PostInList.css";

interface Prop {
  post: Post;
  onDelete: () => void;
}

const PostInList = ({ post, onDelete }: Prop) => {
  return (
    <li className="PostInList">
      <div>
        <p>{post.title}</p>
        <p>{post.thought}</p>
      </div>
      <button onClick={() => onDelete()}>X</button>
    </li>
  );
};

export default PostInList;
