import React from "react";

function App() {

  const office = {
    Name: "SmartWorks Office",
    Rent: 55000,
    Address: "Bangalore"
  };

  const offices = [
    {
      Name: "SmartWorks",
      Rent: 55000,
      Address: "Bangalore",
      Image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Hyderabad",
      Image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600"
    },
    {
      Name: "WeWork",
      Rent: 90000,
      Address: "Pune",
      Image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600"
    }
  ];

  return (

    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={office.Image}
        alt="Office"
        width="400"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p
        style={{
          color: office.Rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> {office.Rent}
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Office List</h2>

      {
        offices.map((item, index) => (

          <div
            key={index}
            style={{
              border: "1px solid black",
              marginBottom: "20px",
              padding: "10px",
              width: "450px"
            }}
          >

            <img
              src={item.Image}
              alt="Office"
              width="400"
            />

            <h3>{item.Name}</h3>

            <p
              style={{
                color: item.Rent < 60000 ? "red" : "green"
              }}
            >
              Rent : {item.Rent}
            </p>

            <p>Address : {item.Address}</p>

          </div>

        ))
      }

    </div>

  );

}

export default App;