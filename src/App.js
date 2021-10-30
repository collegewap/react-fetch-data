import React from "react";
import AsyncAwait from "./AsyncAwait";
import ButtonClick from "./ButtonClick";
import ErrorAsyncAwait from "./ErrorAsyncAwait";
import ErrorThen from "./ErrorThen";
import LoadingText from "./LoadingText";
import PassParam from "./PassParam";
import SearchUser from "./SearchUser";
import UsingAxios from "./UsingAxios";
import UsingCustomHook from "./UsingCustomHook";
import UsingFetch from "./UsingFetch";
import UsingHoc from "./UsingHoc";

const App = () => {
  return (
    <div className="App">
      {/* <UsingFetch /> */}
      {/* <AsyncAwait /> */}
      {/* <ButtonClick /> */}
      {/* <PassParam /> */}
      {/* <SearchUser /> */}
      {/* <LoadingText /> */}
      {/* <ErrorThen /> */}
      {/* <ErrorAsyncAwait /> */}
      {/* <UsingAxios /> */}
      {/* <UsingHoc /> */}
      <UsingCustomHook />
    </div>
  );
};

export default App;
