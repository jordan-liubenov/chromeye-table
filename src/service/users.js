/*
--request GET
--header 'content-type: application/json' 
--url http://apis.chromeye.com:9191/people
*/

export const fetchUsers = () => {
  const url = "http://apis.chromeye.com:9191/people";

  return fetch(url, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  }).then((res) => res.json());
};
