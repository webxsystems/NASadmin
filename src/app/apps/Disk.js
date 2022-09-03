import React from 'react';
// import Disk from "../apps/Disk";



function Disk({ disks }) {
 console.log('Disk : '+{disks});
//    console.log(typeof todisk);

     const result = Object.values(disks).map(disks => Object.entries(disks));
     // console.log('object result : ' + result);



    const entries = Object.entries(disks).map(disks => Object.entries(disks));
    // const entries = Object.entries(obj.data.available).map(data => Object.entries(data))

  //  console.log(entries[0]);
  // console.log('entries : ' + entries[0]);

  const diskData = entries;
  const dd = Object.keys(diskData);
  // console.log('dd : '+dd);

    Object.keys(disks).forEach(function(key, index) {
        // console.log('KEYs : ' + key);
    });
    let i = 0;
    let tableData = [];
    const items = [];
    tableData.push('<div className="table-responsive">');
    tableData.push('<table className="table">');
    tableData.push('<thead><tr>');
                    // <div className="form-check form-check-muted m-0">
                    //     <label className="form-check-label">
                    //         <input type="checkbox" className="form-check-input"/>
                    //         <i className="input-helper"></i>
                    //     </label>
                    // </div>
    tableData.push("<th> Disk</th><th> Type</th><th> Capacity</th></tr></thead><tbody><tr>");

    for (var key in disks['response']) {
     //   if (disks.hasOwnProperty(key)) {
            tableData.push('<td>'+disks['response'][i]['name']+'</td>');
            // console.log(disks['response'][i]['name']);

            items.push({
                'identifier': disks['response'][i]['identifier'],
                'name': disks['response'][i]['name'],
                'size': disks['response'][i]['size'],
                'type': disks['response'][i]['type'],
                'serial':disks['response'][i]['serial']
            });
            // items.push({'size': disks[key][i]['size']});
            // items.push({'type': disks[key][i]['type']});

            console.log(i);
            i += 1;

     //   }
    };



    // handleInputChange(event){
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //     this.setState({
    //         [name]: value
    //     })
    // }
    //
    // console.log(items);
    tableData.push('</tr></tbody></table>');
    // console.log(myObject);
    //  console.log(tableData);
    return (
           <div >
               <table className="table">
                   <thead>
                        <tr>

                            <th></th>
                            <th> <h6 class="text-white">Disk</h6></th>
                            <th> <h6 class="text-white">Serial</h6></th>
                            <th> <h6 class="text-white">Type</h6></th>
                            <th> <h6 class="text-white">Capacity</h6></th>
                        </tr>
                   </thead>
                   <tbody>
                   { (items.length > 0) ? items.map( (item, index) => {
                        return (
                            <tr key={ item.identifier.toString() }>
                                {/*<td> <input type="checkbox" className="form-check-input"/></td>*/}
                                <td>
                                <div className="form-check form-check-muted m-0">
                                    <form>
                                    <label className="form-check-label">
                                        <input type="checkbox" className="checkbox" name="diskSelect" id="diskSelect" value={item.identifier} />
                                        <i className="input-helper"></i>
                                    </label>
                                    </form>
                                    </div></td>
                                <td>{ item.name }</td>
                                <td>{ item.serial }</td>
                                <td>{ item.type }</td>
                                <td>{ item.size }</td>
                            </tr>
                        )
                   }) : <tr><td colSpan = "5">Loading...</td></tr> }
                   </tbody>
            </table>
        </div>)


}

export default Disk