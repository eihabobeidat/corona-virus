import React from "react";
import { useLocation, useParams } from "react-router-dom";
import queryString from 'query-string'

const Posts = ({name}) => {
  let params = useParams()
  let vars= queryString.parse(useLocation().search);
  console.log(vars)
  return (
    <div>
      <h1>Posts</h1>
      Year:{params.year} , Month:{params.month}
      <h6>{name}</h6>
      <h4>{vars.e}</h4>
    </div>
  );
};

export default Posts;
