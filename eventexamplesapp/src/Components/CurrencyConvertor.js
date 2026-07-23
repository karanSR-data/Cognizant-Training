import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = () => {
    const converted = (rupees / 90).toFixed(2);
    setEuro(converted);
  };

  return (
    <div>
      <h2>Currency Convertor</h2>

      <input
        type="number"
        placeholder="Enter Rupees"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />

      <button onClick={handleSubmit}>Convert</button>

      <h3>Euro : {euro}</h3>
    </div>
  );
}

export default CurrencyConvertor;