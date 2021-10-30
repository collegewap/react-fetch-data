import axios from "axios";
import React, { useEffect, useState } from "react";

const withFetching = (url) => (Component) => {
  return () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
      setIsLoading(true);
      axios
        .get(url)
        .then((response) => {
          setUsers(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError("Sorry, something went wrong");
          setIsLoading(false);
        });
    };

    useEffect(() => {
      fetchData();
    }, []);

    return <Component users={users} error={error} isLoading={isLoading} />;
  };
};

export default withFetching;
