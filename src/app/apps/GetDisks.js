import React, { Component } from 'react';
import ListDisks from '../apps/ListDisks';
import Disk from '../apps/Disk';


const http = require("http");
let url = "http://localhost:3030/api/disks";
// const Disk = ({ identifier, name, size, type }) => (
//     <div>
//         <p>{name}</p>
//     </div>
// );


export class GetDisks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disks:[],
        }
    }

    render() {
        let parsedData = '';
        let diskComponents = [];
        let rawData = [];

        http.get(url, res => {
            res.on('data', chunk => {
                rawData += chunk
             //   this.state.disks.push(chunk);
             //   this.setState( {disk:rawData});
              //  console.log({rawData});

            })
            console.log({rawData});

            res.on('end', () => {
                parsedData = JSON.parse(rawData)
                this.setState({ disks: parsedData })

               console.log(JSON.stringify(parsedData));
            })
         console.log(parsedData);
         for (let disk of parsedData){
            diskComponents.push(<Disk item={disk} />)
        }
            console.log(diskComponents);
        })
        // return <div> items={this.state.disks} </div>;
         return (
             <div>
                 {this.state.disks.map((disk) => (
                     <Disk
                        identifier={disk.identifier}
                        name = {disk.name}
                        size={disk.size}
                        type={disk.type}
                     />
                 ))}
             </div>
         )

    }
}


export default GetDisks
