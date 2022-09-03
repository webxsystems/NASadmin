import React from 'react';

//import Pool from "../apps/Pool";




function NetGen({ netgens }) {

    let i = 0;
    // let tableData = [];
    const items = [];

    for (var key in netgens['response']) {
        //   if (disks.hasOwnProperty(key)) {
        //  tableData.push('<td>'+disks['response'][i]['name']+'</td>');
        // console.log(netgen['response'][i]['topology']);
        // console.log(netgen['response'][i]['topology']['data'][0]['stats']);

        // console.log(netgens['response']);
        console.log(netgens.response['nameservers'][1]);
        // console.log(netgens.response['hostname'];
         items.push({
             'id': netgens.response['id'],
             'nameserver1' : netgens.response['nameservers'][0],
             'nameserver2' : netgens.response['nameservers'][1]
             // 'hostname': netgen['response'][i]['name'],
        //     'status':netgen['response'][i]['topology']['data'][0]['status'],
        //     'size': netgen['response'][i]['topology']['data'][0]['stats']['size'],
        //     'allocated': netgen['response'][i]['topology']['data'][0]['stats']['allocated'],
        //     'type': netgen['response'][i]['topology']['data'][0]['type']
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
                    {/*<th> <h6 className="preview-subject">Size</h6></th>*/}
                    {/*<th><h6 className="preview-subject">Allocated</h6> </th>*/}
                    {/*<th> <h6 className="preview-subject">Type</h6></th>*/}
                </tr>
                </thead>
                <tbody>
                {/*{ (items.length > 0) ? items.map( (item, index) => {*/}
                {/*    return (*/}
                {/*        <tr key={ item.id } >*/}
                {/*            /!*<td> <input type="checkbox" className="form-check-input"/></td>*!/*/}
                {/*            /!*<td>*!/*/}
                {/*            /!*    <div className="form-check form-check-muted m-0">*!/*/}
                {/*            /!*        <form>*!/*/}
                {/*            /!*            <label className="form-check-label">*!/*/}
                {/*            /!*                <input type="checkbox" className="form-check-input" name="poolSelect" id="poolSelect" value={item.id} />*!/*/}
                {/*            /!*                <i className="input-helper"></i>*!/*/}
                {/*            /!*            </label>*!/*/}
                {/*            /!*        </form>*!/*/}
                {/*            /!*    </div></td>*!/*/}
                {/*            <td>{ item.id }</td>*/}
                {/*            <td>{ item.name }</td>*/}
                {/*            <td>{ item.status }</td>*/}
                {/*            <td>{ item.size }</td>*/}
                {/*            <td>{ item.allocated }</td>*/}
                {/*            <td>{ item.type }</td>*/}
                {/*            /!*<td>{ item.size }</td>*!/*/}
                {/*        </tr>*/}
                {/*    )*/}
                {/*}) : <tr><td colSpan = "5">Loading...</td></tr> }*/}
                </tbody>
            </table>
        </div>)


}

export default NetGen