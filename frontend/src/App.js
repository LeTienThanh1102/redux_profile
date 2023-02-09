import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import EditPage from "./components/edit/EditPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import New from "./components/posts/New";
import Post from "./components/posts/Post";

function App() {
  const [isOpenPost,setOpen]=useState(false);
  const [isEdit, setEdit]=useState(false);
  const pending=useSelector((state)=>state.user.pedding);
  const error=useSelector((state)=>state.user.error);

  return(
    <div className="App"> 
    {isEdit ?(
      <EditPage setEdit={setEdit} />  
    ): !isEdit && !isOpenPost ?(
      <>
        <Header setEdit={setEdit} />
        <div className="post-container">
          <New />
        </div>
        <Footer setOpen={setOpen} isOpenPost={isOpenPost} />
      </>
    ):(
      <>
        <Header setEdit={setEdit} />
        <Post setOpen={setOpen}/>
      </>
    )
}
    {pending && (
      <p className="loading">Loading.....</p>
    )}
    {!isEdit && error &&(
      <p className="error"> Error when fetching data from server!!!!</p>
    )}
    </div>
  )
}

export default App;
