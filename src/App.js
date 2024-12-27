import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Clock from "./component/Clock";
function App() {
    const [today, setToday] = useState(new Date());
    let str = "";

    useEffect(() => {
        const duration = 1000;
        const id = setInterval(() => {
            setToday(new Date());
        }, duration);
        return () => clearInterval(id);
    }, []);

    const firstDay = new Date("2024-12-24T00:00:00");
    const curruntDay = new Date();
    const diff = curruntDay - firstDay;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    switch (days) {
        case 100:
            str = "100일 됨😎";
        case 200:
            str = "200일 됨😎";
        case 300:
            str = "300일 됨😎";
        case 365:
            str = "365일 됨😎";
        default:
            str = days + "일 됨";
    }

    return (
        <div className="App">
            <Clock today={today} />
            <h2>{str}</h2>
        </div>
    );
}

export default App;
