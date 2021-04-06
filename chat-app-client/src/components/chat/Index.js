import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Index = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";
  useEffect(() => {
    const details = queryString.parse(location.search);
    const { name, room } = details;

    setName(name);
    setRoom(room);

    socket = io(ENDPOINT);
    socket.emit("join", { name, room });
  }, [ENDPOINT, location.search]);

  return (
    <div>
      {name} {room}
    </div>
  );
};

export default Index;
