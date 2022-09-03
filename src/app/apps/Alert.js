import React from 'react';

//import Pool from "../apps/Pool";



function Alert({ alerts }) {

    let i = 0;
    // let tableData = [];
    const items = [];

    for (var key in alerts['response']) {
        //   if (disks.hasOwnProperty(key)) {
        //  tableData.push('<td>'+disks['response'][i]['name']+'</td>');
        // console.log(alerts['response'][i]['topology']);
        // console.log(alerts['response'][i]['topology']['data'][0]['stats']);

        items.push({
            'id': alerts['response'][i]['id'],
            'formatted': alerts['response'][i]['formatted'],
            'level':alerts['response'][i]['level']
          //  'lastoccurence': alerts['response'][i]['last_occurrence']
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
                    <th><h6 className="text-white">ID</h6></th>
                    <th><h6 className="text-white">Message</h6></th>
                    <th><h6 className="text-white">Last Occurrance</h6></th>
                    <th> <h6 className="text-white">Level</h6></th>
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
                            {/*                <input type="checkbox" className="form-check-input" name="alertselect" id="alertselect" value={item.id} />*/}
                            {/*                <i className="input-helper"></i>*/}
                            {/*            </label>*/}
                            {/*        </form>*/}
                            {/*    </div></td>*/}
                            <td className="text-primary">{ item.id }</td>
                            <td className="text-primary">{ item.formatted }</td>
                            <td className="text-primary">{ item.lastoccurence }</td>
                            {(() => {
                                switch (item.level) {

                                    case'WARNING':
                                        return <td className="text-primary">
                                            <div className="badge badge-danger text-light">WARNING</div></td>;
                                        break;
                                    case 'CRITICAL':
                                        return <td className="text-primary">
                                            <div className="badge badge-warning text-light">CRITICAL</div></td>;
                                        break;
                                    case 'INFO':
                                        return <td className="text-primary">
                                            <div className="badge badge-info text-light">INFO</div></td>;
                                        break;


                                    default:
                                        return null
                                }
                            })()}

                            {/*<td className="text-primary">{ item.level }</td>*/}
                        </tr>
                    )
                }) : <tr><td colSpan = "5">Loading...</td></tr> }
                </tbody>
            </table>
        </div>)


}

export default Alert