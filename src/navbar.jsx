import React, { useState } from "react";
import './assets/css/navbar.css'; 
import Hook from "./hook1";
import Todolist from "./todolist";
import About from "./about";
import Home from "./home";
import Services from "./services";
import Blog from "./blog";

function Navbar() {
    const [showForm, setShowForm] = useState(false);
    const [showAbout, setAbout] = useState(false);
    const [showHome, setHome] = useState(true);
    const [showServices, setServices] = useState(false);
    const [showBlog, setBlog] = useState(false);
    const [showtodo, settodo] = useState(false);

    const toggleSection = (section) => {
        setServices(false);
        setAbout(false);
        setShowForm(false);
        setBlog(false);
        setHome(false);
        settodo(false);

        switch (section) {
            case 'home':
                setHome(true);
                break;
            case 'services':
                setServices(true);
                break;
            case 'about':
                setAbout(true);
                break;
            case 'blog':
                setBlog(true);
                break;
            case 'form':
                setShowForm(true);
                break;
            case 'todo':
                settodo(true);
                break;
            default:
                setHome(true);
                break;
        }
    }

    return (
        <div>
            <div className="navbar">
                <div className="title">
                    <h2>Sanjay.V</h2>
                </div>
                <div className="links">
                    <nav>
                        <button onClick={() => toggleSection('home')}>Home</button>
                        <button onClick={() => toggleSection('about')}>About</button>
                        <button onClick={() => toggleSection('services')}>Services</button>
                        <button onClick={() => toggleSection('form')}>Form</button>
                        <button onClick={() => toggleSection('blog')}>Expense Tracker</button>
                        <button onClick={() => toggleSection('todo')}>ToDoList</button>
                    </nav>
                </div>
            </div>

            <div className="main-content">
                {showForm && <Hook />}
                {showAbout && <About />}
                {showHome && <Home name="sanjay" age={29} isLoggedIn={false} />}
                {showServices && <Services />}
                {showBlog && <Blog />}
                {showtodo && <Todolist />}
            </div>
        </div>
    );
}

export default Navbar;
