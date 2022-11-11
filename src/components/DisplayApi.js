import { useEffect, useState } from "react";
import { StyledSpan } from "./StyledComponents";

const fetchData = async (callback) => {
  const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes/5");
  const data = await response.json();

  callback(data);
};

export const DisplayApi = () => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetchData(setFetchedData);
  }, []);

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <ul>
        {fetchedData &&
          fetchedData.map((e, i) => {
            return (
              <li key={i}>
                {e.quote} - <StyledSpan>{e.author}</StyledSpan>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
