import { useState } from "react";
import "./App.css";

function App() {
  // GET 
    getData


  async function postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <span>username</span>
        <input
          type="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>

      <div>
        <span>password</span>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <button
        onClick={async () =>
          await postData("http://localhost:3000/admin", {
            name: username,
            password: password,
          }).then((data) => {
            console.log(data, "SUCCESS");
          })
        }
      >
        Submit
      </button>
    </div>
  );
}

export default App;
