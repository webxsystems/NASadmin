import React, { useState, useEffect } from 'react';
const http = require("http");

let url = "http://localhost:3030/api/disks";

// export class GetTableData extends Component {
// const renderTableData = results => {
//     let content = [];
//     for (let item of results) {
//         content.push(<tr>
//             <td>{item.name}</td>
//         </tr>);
//     }
//     return content;
// }

function GetTableData() {
    const [loading, setLoading] = useState(false);
    const [disks, setDisks] = useState({});

    useEffect(() => {
        async function getData() {
            http.get(url, res => {
                const disks = [];
                var result = '';
                res.on('data', (chunk) => {
                    disks.push(chunk);
                    //result = disks.toString();
                    //result = JSON.parse(disks);
                    result = disks;

                    console.log('result : ' + result);
                    // this.setState({disks: disksToString});
                    const results = JSON.parse(result);
                    console.log(results['response'][0]['name']);
                    //console.log('results : ' + results);

                    if (result) {
                        var content = [];
                        console.log('length : ' +  results['response'].length);
                        for (var i = 0; i < results['response'].length; i++) {
                            console.log("counter : " + i);
                            content.push(<tr> <td>results['response'][i]['name']</td><td>results['response'][i]['size']</td></tr>);
                            console.log(results['response'][i]['name'])
                            //root.render(<tr><td>results['reponse'][i]['name']</td>
                         };

                        console.log(content);
                        setDisks(result);
                        setLoading(false);
                    }
                })
            })
        }

        getData()
    }, []);


         return (
            <div>


                <h2>Disks</h2>
                {loading ? (
                    <span>Loading...</span>
                ) : (

                      <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>
                                    <div className="form-check form-check-muted m-0">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input"/>
                                            <i className="input-helper"></i>
                                        </label>
                                    </div>

                                </th>
                                <th> Disk</th>
                                <th> Type</th>
                                <th> Capacity</th>
                            </tr>
                            </thead>
                            <tbody>

                                {this.results['response'].map((value, key) => {
                                    return (
                                        <tr>
                                            <td>{value.name}</td>
                                            <td>{value.size}</td>
                                            <td>{value.type}</td>
                                        </tr>
                                    );
                                })}


                            {/*<tr>*/}
                            {/*    <td>*/}
                            {/*        <div className="form-check form-check-muted m-0">*/}
                            {/*            <label className="form-check-label">*/}
                            {/*                <input type="checkbox" className="form-check-input"/>*/}
                            {/*                <i className="input-helper"></i>*/}
                            {/*            </label>*/}
                            {/*        </div>*/}
                            {/*    </td>*/}
                            {/*    <td>*/}
                            {/*        <div className="d-flex">*/}

                            {/*        </div>*/}
                            {/*    </td>*/}
                            {/*      <td></td>*/}
                            {/*    <td> $14,500</td>*/}
                            {/*    <td> Dashboard</td>*/}
                            {/*    <td>*/}
                            {/*        /!*<div className="badge badge-outline-success">Approved</div>*!/*/}
                            {/*    </td>*/}
                            {/*</tr>*/}

                            </tbody>
                        </table>
                    </div>

                )}
            </div>
        )




}

    export default GetTableData