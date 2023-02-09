import "../edit/edit.css";
import "../posts/post.css"
function Input(props) {
  const { data, setData, lable, inputType, classStyle } = props;

  return (
    <>
      <div>{lable}</div>
      {inputType === "textarea" ? (
        <textarea
          type="text"
          className={classStyle}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
}

export default Input;
