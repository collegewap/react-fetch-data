import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
  }, [url]);

  return { users, error, isLoading };
};

export default useFetch;
