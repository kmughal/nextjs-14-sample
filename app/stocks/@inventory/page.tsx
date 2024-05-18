'use client';
import React from "react";

export default function InventoryPage() {
    const [time,setTime] = React.useState(new Date());
    const [counter,setCounter] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return <div className="border-spacing-2 bg-green-100 text-yellow-600">
        You are looking for Inventory Page = {time.toString()}
        <button onClick={() => setCounter(counter + 1)}>Counter : {counter}</button>
    </div>
}