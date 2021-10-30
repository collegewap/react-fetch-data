import React, { useEffect, useState } from "react";

const ErrorAsyncAwait = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setError("");
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/404");
      if (!response.ok) {
        // If the API responds meaningful error message,
        // then you can get it by calling response.statusText
        throw new Error("Sorry something went wrong");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      // It is always recommended to define the error messages
      // in the client side rather than simply relying on the server messages,
      // since server messages might not make sense to end user most of the time.
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
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

export default ErrorAsyncAwait;
