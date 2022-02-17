import React, { useState } from "react";
import Form from './Form';
function App() {

  const [data, setData] = useState(["", []])

  function handleData(searchWord) {
    const URL = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchWord}&format=json&origin=*&limit=10`
    fetch(URL)
      .then((res) => res.json())
      .then((result) => { setData(result) })
  }
  console.log(data[3])
  return (
    <div className="container">
      <h1>Wikipedia Search with Function Component</h1>
      <Form handleData={handleData} data={data} />
      <ul>
        {data[3]?.map((item, i) => {
          return (
            <a key={i} href={item}><li>{item}</li></a>
          )
        })}
      </ul>
    </div>
  );
}
export default App;
