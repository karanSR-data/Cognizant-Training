import React from "react";

function UserPage() {

    return (

        <div>

            <h2>Welcome User</h2>

            <h3>Flight Details</h3>

            <table border="1" cellPadding="10" style={{ margin: "auto" }}>

                <thead>

                    <tr>

                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Price</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>AI101</td>
                        <td>Delhi</td>
                        <td>Mumbai</td>
                        <td>₹5000</td>

                    </tr>

                    <tr>

                        <td>AI202</td>
                        <td>Bangalore</td>
                        <td>Chennai</td>
                        <td>₹3500</td>

                    </tr>

                </tbody>

            </table>

            <br />

            <button>Book Ticket</button>

        </div>

    );

}

export default UserPage;