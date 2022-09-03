import React from 'react';
import Disk from './Disk';

function Disks({disks}) {
    // console.log({disks['response'][0].advpowermgmt});
   console.log(disks);
   let work = JSON.stringify(disks);
   // let jwork = JSON.parse(disks);
   console.log(typeof disks);
   console.log(typeof work);
   // console.log(typeof jwork);
 //  console.log(disks.response[0]);
   //
    //
    // let work = JSON.parse(disks);
    // console.log(work);
    return (
        <div  class="table-responsive">
        <table class="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>

            {/*{ disks['response'][0] }*/}
            {/*{ disks.response.map(disk => <Disk key={disk.identifier} disk={disk} />)}*/}
            </tbody>
        </table>
        </div>
    )
}

export default Disks