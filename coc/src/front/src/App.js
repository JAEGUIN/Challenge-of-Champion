
import {useEffect, useState} from "react";
import React from "react";
import axios from 'axios';

function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    axios.get("/test/hi")
    .then(response=> setData(response.data)
    )


  },[]);


  return (<>
             백엔드에서 가져온 데이터입니다 : {data}
              </>
  );
}

export default App;