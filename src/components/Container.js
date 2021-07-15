import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  // 在这里使用Context,并使用runSearch方法发起请求
  const { images, loading, runSearch } = useContext(PhotoContext);
  // useEffect是在某些值发生更新时执行，第二个值是更新依赖的依据，此参数变化了才进行实际更新操作
  // useEffect文档地址: https://zh-hans.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
  // 第二个参数说明: https://zh-hans.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
