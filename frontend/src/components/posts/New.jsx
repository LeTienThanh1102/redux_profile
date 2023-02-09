import { useSelector } from "react-redux";
import "./post.css";
function New() {
  const post = useSelector((state) => state.post.posts);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  console.log(post);
  return (
    <>
      <section className="post-container">
        {post.slice(1).map((item, index) => (
          <div className="posts" key={index}>
            <p className="posts-title">{item.title}</p>
            <p className={`posts-tags-${tags[item.tag]} posts-tags`}>{tags[item.tag]}</p>
            <p className="posts-description">{item.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default New;
