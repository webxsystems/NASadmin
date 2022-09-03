import React, { useEffect, useState } from "react";

import Disk from "../apps/Disk";

const http = require("http");

//let url = "http://192.168.1.41/api/disks";
 let url = "http://localhost:3030/api/disks";
// const Disk = ({ identifier, name, size, type }) => (
//     <div>
//         <p>{name}</p>
//     </div>
// );

//class ListDisks extends eReact.Component{
function ListDisks() {
    const [loading, setLoading] = useState(false);
    const [disks, setDisks] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        async function fetchData() {
            try {
                const disks = await fetch(url,);
                const result = await disks.json();
                if (result) {
                    console.log(result);
                    console.log(result['response'][0]['serial']);
                    setDisks(result);
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
   // return ()

         //     .then(resp => resp.json())
         //     .then(data => setDisks(data))
    //
    //     let parsedData = '';
    //     let diskComponents = [];
    //     let rawData = [];
    //     let result = '';
    //
    //     http.get(url, res => {
    //         res.on('data', chunk => {
    //             rawData += chunk
    //             //this.state.disks.push(chunk);
    //         })
    //         res.on('end', () => {
    //             result = JSON.parse(rawData)
    //             console.log(result);
    //             console.log(result['response'][0]['name']);
    //
    //             setDisks(result);
    //             //console.log(this.state.disks);
    //             //this.setState({ disks: parsedData })
    //             //     console.log(JSON.stringify(parsedData));
    //         })
    //         if(result)
    //             console.log('executed');
    //             for (let disk of parsedData){
    //                 diskComponents.push(<Disk item={disk} />)
    //             }
    //             setDisks(result);
    //          //   console.log(result)
    //             setLoading(false);
    //         // }
    //     })
    // }, []);
    // console.log('listdisks : '+{disks});

    return (
        <div>
            <Disk disks={disks} />
        </div>
        // <div className="table-responsive">
        //     <table className="table">
        //         <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>Size</th>
        //             <th>Type</th>
        //         </tr>
        //         </thead>
        //         <tbody>
        //         <tr>
        //             <td></td>
        //             <td> </td>
        //             <td> </td>
        //         </tr>
        //         {/*{ disks['response'][0] }*/}
        //         {/*{ disks.response.map(disk => <Disk key={disk.identifier} disk={disk} />)}*/}
        //         </tbody>
        //     </table>
        // </div>
    );
}

export default ListDisks;