import React, { useState, useEffect } from 'react';

// Example hook to retrieve data from an external endpoint
function useFetchData() {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    setStatus('loading');
    fetch('https://your-restful-endpoint')
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setStatus('success');
        setData(data);
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  return {
    status,
    data,
  };
}

export function DocumentScreen() {
  const { status, data } = useFetchData();

  // Ensure data is an array and has at least one item
  const user = data.length > 0 ? data[0].user : null;

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'error') {
    return <p>There was an error fetching the data!</p>;
  }
  if (!user || user.length === 0) {
    return <p>No user data available.</p>;
  }

  return (
    <>
      <p>Email: {user[0].gmail}</p>
      <p>Name: {user[0].name}</p>
      <p>Age: {user[0].age}</p>
      <p>Status: {user[0].status}</p>
    </>
  );
}

