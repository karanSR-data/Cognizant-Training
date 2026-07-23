import React, { useState } from "react";
import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>

      <h1>Ticket Booking App</h1>

      {isLoggedIn ? (
        <>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>

          <hr />

          <UserPage />
        </>
      ) : (
        <>
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>

          <hr />

          <GuestPage />
        </>
      )}

    </div>
  );
}

export default App;