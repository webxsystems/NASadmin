import React, { useEffect, useState } from "react";

import NetGen from "../apps/NetGen";

const http = require("http");

//let url = "http://192.168.1.41/api/disks";
let url = "http://localhost:3030/api/network/config/general";

//class ListDisks extends eReact.Component{
function ListNetworkGeneral() {
    const [loading, setLoading] = useState(false);
    const [netgens, setNetgens] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        async function fetchData() {
            try {
                const netgens = await fetch(url,);
                const result = await netgens.json();
                if (result) {
                    console.log(result);
                    // console.log(result['response'][0]['serial']);
                    setNetgens(result);
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
            <NetGen netgens={netgens} />
        </div>

    );
}

export default ListNetworkGeneral;