import React, { useState } from "react";
import './assets/css/blog.css'

function Blog() {
    const [forwhat, setForwhat] = useState("");
    const [amount, setAmount] = useState("0");
    const [array, setArray] = useState([]);
    const [date, setDate] = useState("");

    const handleForwhat = (e) => {
        setForwhat(e.target.value);
    };

    const handleAmount = (e) => {
        setAmount(e.target.value);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const handleArray = () => {
        const newItem = {
            forwhat: forwhat,
            amount: amount,
            date: date
        };
        setArray([...array, newItem]);
        setForwhat("");
        setAmount("0");
        setDate("");
    };

    const handleDelete = (index) => {
        setArray(array.filter((_, i) => i !== index));
    };

    return (
        <div className="blog-container">
           <center><h1>Expense Tracker</h1></center>
        <div className="flex">
        <input
                type="text"
                onChange={(e) => handleForwhat(e)}
                value={forwhat}
                placeholder="For What"
            />
            <input
                type="number"
                onChange={(e) => handleAmount(e)}
                value={amount}
                placeholder="Amount"
            />
            <input
                type="date"
                onChange={(e) => handleDate(e)}
                value={date}
                placeholder="Date"
            />
            <button onClick={handleArray}>Add Expense</button>
        </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Amount ₹</th>
                        <th>For What</th>
                        <th>Date</th>
                        <th className="actions-column">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item, index) => (
                        <tr key={index}>
                            <td>₹ {item.amount}</td>
                            <td>{item.forwhat}</td>
                            <td>{item.date}</td>
                            <td className="actions-column">
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="button"
                                >
                                    ❌
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Blog;
