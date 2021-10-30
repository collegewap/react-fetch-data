import React from "react";
import withFetching from "./withFetching";
const url = "https://jsonplaceholder.typicode.com/users";

const UsingHoc = ({ isLoading, error, users }) => {
  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default withFetching(url)(UsingHoc);
