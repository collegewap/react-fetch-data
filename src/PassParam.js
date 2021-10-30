import React, { useEffect, useState } from "react";

const PassParam = () => {
  const [user, setUser] = useState([]);
  const id = 1;

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data[0].name);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Name: {user}</div>;
};

export default PassParam;
