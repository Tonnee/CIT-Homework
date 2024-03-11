import { useState } from "react";

function App() {
    let [postData, setPostData] = useState("");

    let handleChange = (e) => {
        setPostData(e.target.value);
    };
  
  let handleSave = () => {
      console.log(postData);
    }

    return (
        <>
            <input onChange={handleChange} />
            <button onClick={handleSave}>Save</button>
        </>
    );
}

export default App;
