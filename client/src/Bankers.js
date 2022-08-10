import React from 'react'

function Bankers() {
    return (
        <div>
            <h1 style={{textAlign:'center', backgroundColor: "#D9261C"}}>Clients</h1>
            <table style={{width: '100%'}}>
                <tr>
                    <th>Name</th>
                    <th>Contact Number</th>
                    <th>Asset Class</th>
                    <th>Assigned Banker</th>
                </tr>
                <tr>
                    <td style={{textAlign:'center'}}>ABC</td>
                    <td style={{textAlign:'center'}}>12345678</td>
                    <td style={{textAlign:'center'}}>Low</td>
                    <td style={{textAlign:'center'}}></td>
                </tr>
                <tr>
                    <td style={{textAlign:'center'}}>DEF</td>
                    <td style={{textAlign:'center'}}>23456789</td>
                    <td style={{textAlign:'center'}}>Middle</td>
                    <td style={{textAlign:'center'}}></td>
                </tr>
                <tr>
                    <td style={{textAlign:'center'}}>GHI</td>
                    <td style={{textAlign:'center'}}>34567890</td>
                    <td style={{textAlign:'center'}}>High</td>
                    <td style={{textAlign:'center'}}>Banker 1</td>
                </tr>
            </table>
        </div>
    )
}

export default Bankers
