import React, { useEffect, useState } from "react";

import Pool from "../apps/Pool";

const http = require("http");

//let url = "http://192.168.1.41/api/disks";
let url = "http://localhost:3030/api/pools";
// const Disk = ({ identifier, name, size, type }) => (
//     <div>
//         <p>{name}</p>
//     </div>
// );

//class ListDisks extends eReact.Component{
function ListPools() {
    const [loading, setLoading] = useState(false);
    const [pools, setPools] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        async function fetchData() {
            try {
                const pools = await fetch(url,);
                const result = await pools.json();
                if (result) {
                    console.log(result);
                    // console.log(result['response'][0]['serial']);
                    setPools(result);
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
            <Pool pools={pools} />
        </div>

    );
}

export default ListPools;