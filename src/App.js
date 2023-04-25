import logo from "./logo.svg";
import "./App.css";

import {
  useLazyGetRaffflesQuery,
  useLazyGetDataByTokenQuery,
} from "./services/raffle";
import { useEffect, useState } from "react";

function App() {
  const [getRafffles, { error, isFetching }] = useLazyGetRaffflesQuery();

  const [getDataByToken] = useLazyGetDataByTokenQuery();

  const [raffflesData, setRaffflesData] = useState([]);

  const getRafflesData = async () => {
    const { data } = await getRafffles();
    setRaffflesData(data);
  };

  const getRafflesDataByToken = async () => {
    const tokenData = {
      token_address: "Bio7mHSuvSRt93geuy19zkv9yRtXUrBkkejZdBwJbDNJ",
    };
    const { data } = await getDataByToken(tokenData);
    console.log("🚀 ~ getRafflesDataByToken ~ data:", data);
  };

  useEffect(() => {
    getRafflesData();
    getRafflesDataByToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isFetching ? (
          <p className="font-color-white">Loading....</p>
        ) : error ? (
          <p className="font-color-red">{error?.data?.error}</p>
        ) : (
          <div>
            {raffflesData?.present?.map((rafffle, i) => (
              <div key={i}>
                <p>{rafffle?.collection_name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
