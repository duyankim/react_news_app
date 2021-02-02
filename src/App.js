import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "./API_KEY";

function App() {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get(API_KEY).then((response) => {
      setData(response.data);
    });
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;
