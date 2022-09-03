import React, { Component } from 'react';
//import React from 'react';

const http = require("http");

let url = "http://localhost:3030/api/datasets";
//console.log(url);


export class GetDatasets extends Component {
    constructor(props) {
        super(props);
        this.state = {datasets: []};
        //   this.state = { parseData: [] };

        http.get(url, res => {
            var rawData = [];
            res.on('data', chunk => {
                rawData += chunk
                //console.log(rawData);
            })
            res.on('end', () => {
                //  var parseData = JSON.parse(rawData)
                // this.state.disks = JSON.parse(rawData)
                this.state.datasets = rawData;
                console.log("this state datasets : " + this.state.datasets);
            })
        })
    }

    render() {
        return <div>{this.state.datasets}</div>;
    };
};

export default GetDatasets