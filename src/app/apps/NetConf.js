import React from 'react';
import {Properties as item} from "react-dragula/example/example";

//import Pool from "../apps/Pool";




function NetConf({ netconfs }) {

    let i = 0;
    // let tableData = [];
    const items = [];

  for (var key in netconfs['response']) {
        //   if (disks.hasOwnProperty(key)) {
        //  tableData.push('<td>'+disks['response'][i]['name']+'</td>');
        // console.log(netconf['response'][i]['topology']);
        // console.log(netconf['response'][i]['topology']['data'][0]['stats']);
        // console.log(netconfs['response']);
        // console.log(netconfs.response.hostname);

        items.push({
               'id': netconfs.response.id,
               'hostname': netconfs.response.hostname,
               'ipv4gateway':netconfs.response.ipv4gateway
            // 'size': netconfs['response'][i]['topology']['data'][0]['stats']['size'],
            // 'allocated': netconfs['response'][i]['topology']['data'][0]['stats']['allocated'],
            // 'type': netconfs['response'][i]['topology']['data'][0]['type']
        });
        // items.push({'size': disks[key][i]['size']});
        // items.push({'type': disks[key][i]['type']tit
        console.log(i);
        i += 1;

        //   }
   };

    console.log('items : ' + items);


    return (
        <div >
            {/*<ul>*/}
            {/*    /!*{ (items.length > 0) ? items.map ((item, index) => {*!/*/}
            {/*        return (*/}
            {/*            <li>ID: { item.id }</li>*/}
            {/*        //     <li>{ item.hostname }</li>*/}
            {/*        //     <li>{ item.ipv4gateway }</li>*/}
            {/*        )*/}
            {/*    /!*}) :*!/*/}

            {/*</ul>*/}
        </div>
    )


}

export default NetConf