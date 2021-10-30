import React from "react";
import useFetch from "./useFetch";
const url = "https://jsonplaceholder.typicode.com/users";

const UsingCustomHook = () => {
  const { users, error, isLoading } = useFetch(url);

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

export default UsingCustomHook;
