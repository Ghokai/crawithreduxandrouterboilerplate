import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Counter</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/more">More</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/notfound">Not Found</Link>
        </li>
      </ul>
    </div>
  );
};
