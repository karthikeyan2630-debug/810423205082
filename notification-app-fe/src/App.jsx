import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://4.224.186.213/evaluation-service/notifications")
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter(
          (item) =>
            item.type &&
            item.type.toLowerCase() === filter.toLowerCase()
        );

  const priorityNotifications = [...filteredNotifications]
    .sort((a, b) => {
      const weight = {
        placement: 3,
        result: 2,
        event: 1,
      };

      const w1 = weight[a.type?.toLowerCase()] || 0;
      const w2 = weight[b.type?.toLowerCase()] || 0;

      if (w1 !== w2) return w2 - w1;

      return new Date(b.timestamp) - new Date(a.timestamp);
    })
    .slice(0, 10);

  return (
    <div className="app">
      <h1>Campus Notifications</h1>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="event">Event</option>
        <option value="result">Result</option>
        <option value="placement">Placement</option>
      </select>

      <h2>Priority Notifications</h2>

      {priorityNotifications.map((item) => (
        <div key={item.id} className="card priority">
          <h3>{item.title}</h3>
          <p>{item.message}</p>
          <span>{item.type}</span>
        </div>
      ))}

      <h2>All Notifications</h2>

      {filteredNotifications.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.title}</h3>
          <p>{item.message}</p>
          <span>{item.type}</span>
        </div>
      ))}
    </div>
  );
}

export default App;