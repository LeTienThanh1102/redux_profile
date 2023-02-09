import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../input/Input";
import "./post.css";
import { createPost } from "../redux/postSlice";

function Post(props) {
  const { setOpen } = props;
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some descriptions");
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const [number, setNumber] = useState(0);
  const handlePost = () => {
    setOpen(false);
    const newPost = {
      title: title,
      description: desc,
      tag: number,
    };
    // console.log(createPost);
    dispatch(createPost(newPost));
  };
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        data={title}
        inputType="textarea"
        setData={setTitle}
        classStyle="makepost-title"
        lable="Title"
      />
      <Input
        data={desc}
        inputType="textarea"
        setData={setDesc}
        classStyle="makepost-desc"
        lable="Descriptions"
      />
      <div> Tags</div>
      <div className="makepost-tags">
        {tags.map((item, index) => (
          <button
            key={index}
            className={`${
              number == index
                ? `makepost-tags-selected`
                : `makepost-tags-${item}`
            }`}
            onClick={() => setNumber(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Post;
