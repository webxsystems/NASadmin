import React from 'react';

//import Pool from "../apps/Pool";




function Pool({ pools }) {

    // const result = Object.values(pools).map(pools => Object.entries(pools));
    //
    // const entries = Object.entries(disks).map(disks => Object.entries(disks));
    //
    // const diskData = entries;
    // const dd = Object.keys(diskData);
    //
    // Object.keys(disks).forEach(function(key, index) {
    //     console.log('KEYs : ' + key);
    // });
    let i = 0;
    // let tableData = [];
    const items = [];

    for (var key in pools['response']) {
        //   if (disks.hasOwnProperty(key)) {
      //  tableData.push('<td>'+disks['response'][i]['name']+'</td>');
       console.log(pools['response'][i]['topology']);
        console.log(pools['response'][i]['topology']['data'][0]['stats']);

        items.push({
            'id': pools['response'][i]['id'],
            'name': pools['response'][i]['name'],
            'status':pools['response'][i]['topology']['data'][0]['status'],
            'size': pools['response'][i]['topology']['data'][0]['stats']['size'],
            'allocated': pools['response'][i]['topology']['data'][0]['stats']['allocated'],
            'type': pools['response'][i]['topology']['data'][0]['type']
        });
        // items.push({'size': disks[key][i]['size']});
        // items.push({'type': disks[key][i]['type']});

        console.log(i);
        i += 1;

        //   }
    };

    console.log(items);


    return (
        <div >
            <table className="table">
                <thead>
                <tr>

                    {/*<th></th>*/}
                    <th><h6 className="preview-subject">ID</h6></th>
                    <th><h6 className="preview-subject">Name</h6></th>
                    <th><h6 className="preview-subject">Status</h6></th>
                    <th> <h6 className="preview-subject">Size</h6></th>
                    <th><h6 className="preview-subject">Allocated</h6> </th>
                    <th> <h6 className="preview-subject">Type</h6></th>
                </tr>
                </thead>
                <tbody>
                { (items.length > 0) ? items.map( (item, index) => {
                    return (
                         <tr key={ item.id } >
                            {/*<td> <input type="checkbox" className="form-check-input"/></td>*/}
                            {/*<td>*/}
                            {/*    <div className="form-check form-check-muted m-0">*/}
                            {/*        <form>*/}
                            {/*            <label className="form-check-label">*/}
                            {/*                <input type="checkbox" className="form-check-input" name="poolSelect" id="poolSelect" value={item.id} />*/}
                            {/*                <i className="input-helper"></i>*/}
                            {/*            </label>*/}
                            {/*        </form>*/}
                            {/*    </div></td>*/}
                            <td>{ item.id }</td>
                            <td>{ item.name }</td>
                            <td>{ item.status }</td>
                            <td>{ item.size }</td>
                            <td>{ item.allocated }</td>
                            <td>{ item.type }</td>
                            {/*<td>{ item.size }</td>*/}
                        </tr>
                    )
                }) : <tr><td colSpan = "5">Loading...</td></tr> }
                </tbody>
            </table>
        </div>)


}

export default Pool