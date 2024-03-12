import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

function App() {
    const db = getDatabase();
    let [postData, setPostData] = useState("");

    let handleChange = (e) => {
        setPostData(e.target.value);
    };

    let handleSave = () => {
        set(push(ref(db, "ToDo")), {
            task: postData,
        });
    };

    useEffect(() => {
        const todoRef = ref(db, "ToDo");
        onValue(todoRef, (snapshot) => {
            console.log(snapshot.val());
        });
    }, []);

    return (
        <>
            <input
                onChange={handleChange}
                className="border-2 rounded-md borderd py-1.5 pl-7 pr-20 text-gray-900"
            />
            <button onClick={handleSave} className="bg-blue-600 p-2 rounded-sm">
                Save
            </button>
        </>
    );
}

export default App;
