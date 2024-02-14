import { useEffect, useState } from "react";

const NameTicket = (prop: { id: string }) => {
  const [name, setName] = useState(false); // State to track whether data is loaded or not

  async function initLoading() {
    const username = prop.id;
    const res = await fetch(`/api/user?username=${username}`);
    const result = await res.json();
    const data = result[0];
    const _name = data.nickname;
    setName(_name);
  }

  useEffect(() => {
    initLoading();
  }, []);

  return <p className="font-tomyam font-medium text-lg">{name}</p>;
};

export default NameTicket;
