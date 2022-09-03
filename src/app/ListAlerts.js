import React, { useEffect, useState } from "react";

import Alert from "../apps/Alert";

const http = require("http");

//let url = "http://192.168.1.41/api/disks";
let url = "http://localhost:3030/api/alerts";


//class ListDisks extends eReact.Component{
function ListAlerts() {
    const [loading, setLoading] = useState(false);
    const [alerts, setAlerts] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        async function fetchData() {
            try {
                const alerts = await fetch(url,);
                const result = await alerts.json();
                if (result) {
                    console.log(result);
                    // console.log(result['response'][0]['serial']);
                    setAlerts(result);
                    // setDisks(JSON.stringify(result));
                    setLoading(false);
                }
            } catch (e) {
                setLoading(false);
                setError(e.message);
            }
        }

        fetchData();
    }, []);


    return (
        <div>
            <Alert alerts={alerts} />
        </div>

    );
}

export default ListAlerts;