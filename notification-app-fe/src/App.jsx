import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Priority Notifications</h1>

      <div className="notification-container">
        <div className="notification-card">
          <h3>Placement Drive</h3>
          <p>Amazon recruitment starts tomorrow.</p>
          <p className="priority">Priority: High</p>
          <p className="timestamp">24 Jun 2026</p>
        </div>
      </div>
    </div>
  );
}

export default App;