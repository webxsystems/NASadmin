import React, { useEffect, useState } from "react";

import NetConf from "../apps/NetConf";

const http = require("http");

//let url = "http://192.168.1.41/api/disks";
let url = "http://localhost:3030/api/network/config";

//class ListDisks extends eReact.Component{
function ListNetworkConfig() {
    const [loading, setLoading] = useState(false);
    const [netconfs, setNetconfs] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        async function fetchData() {
            try {
                const netconfs = await fetch(url,);
                const result = await netconfs.json();
                if (result) {
                    console.log(result);
                    // console.log(result['response'][0]['serial']);
                    setNetconfs(result);
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
            <NetConf netconfs={netconfs} />
        </div>

    );
}

export default ListNetworkConfig;