import React, { useEffect, useState } from "react";

function GoogleSearch({ query }) {
  const [ans, setAns] = useState("");
  const googleBaseUrl = "https://www.google.com/search?q=";
  const extractFirstResultUrl = (html) => {
    // Use regular expressions to find the first search result URL.
    const match = /<a href="([^"]+)"/.exec(html);

    if (match) {
      return match[1];
    } else {
      return null;
    }
  };
  const firstRes = extractFirstResultUrl(googleBaseUrl);
  useEffect(() => {
    const plantdetails = "plant";
    const searchUrl = `${googleBaseUrl}${encodeURIComponent(
      query
    )}${plantdetails}`;
    setAns(searchUrl);
    console.log(ans);
    console.log(firstRes);
  }, [query, ans, firstRes]);
    return <>
        <a href={ans}>CLick for more details about Plant</a>
  </>;
}

export default GoogleSearch;
