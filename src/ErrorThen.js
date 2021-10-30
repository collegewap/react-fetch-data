import React, { useEffect, useState } from "react";

const ErrorThen = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchData = () => {
    setError("");
    fetch("https://jsonplaceholder.typicode.com/404")
      .then((response) => {
        // If the HTTP response is 2xx then it response.ok will have a value of true
        if (response.ok) {
          return response.json();
        } else {
          // If the API responds meaningful error message,
          // then you can get it by calling response.statusText
          throw new Error("Sorry something went wrong");
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        // It is always recommended to define the error messages
        // in the client side rather than simply relying on the server messages,
        // since server messages might not make sense to end user most of the time.
        setError(error.message);
      });
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

export default ErrorThen;
