import React from 'react'
//import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

function Bankers() {
    return (
        // style={{width: '90%'}}
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
            <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-a0i708" style={{marginTop: '100px'}}>
                <h2 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom css-nfbrjd" style={{marginLeft: '15px'}}>Clients</h2>
                    <table class="MuiTable-root css-1owb465" style={{width: '100%'}}> 
                        <thead class="MuiTableHead-root css-1wbz3t9">
                            <tr class="MuiTableRow-root MuiTableRow-head css-1gqug66" style={{borderBottom:"1px solid black"}}>
                                <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeSmall css-13njpue" scope="col" style={{textAlign:'center'}}>Name</th>
                                <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeSmall css-13njpue" scope="col" style={{textAlign:'center'}}>Contact Number</th>
                                <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeSmall css-13njpue" scope="col" style={{textAlign:'center'}}>Date Joined</th>
                                <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeSmall css-13njpue" scope="col" style={{textAlign:'center'}}>Total Assets</th>
                                <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeSmall css-12pjbv5" scope="col" style={{textAlign:'center'}}>Monthly Sales Amount</th>
                            </tr>
                        </thead>
                        <tbody class="MuiTableBody-root css-1xnox0e">
                            <tr class="MuiTableRow-root css-1gqug66" style={{borderBottom:"1px solid black"}}>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>Aaron</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>12345678</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>15 Mar, 2013</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>$40,350.96</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignCenter MuiTableCell-sizeSmall css-1thfh4x" style={{textAlign:'center'}}>$312.44</td>
                            </tr>
                            <tr class="MuiTableRow-root css-1gqug66">
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>Bryan</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>23456789</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>06 Jun, 2014</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>$72,991.34</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall css-1thfh4x" style={{textAlign:'center'}}>$866.99</td>
                            </tr>
                            <tr class="MuiTableRow-root css-1gqug66">
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>Chloe</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>34567890</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>08 July, 2009</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>$100,391.28</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall css-1thfh4x" style={{textAlign:'center'}}>$100.81</td>
                            </tr>
                            <tr class="MuiTableRow-root css-1gqug66">
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>Dylan</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>45678901</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>24 Mar, 2013</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>$546,733.01</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall css-1thfh4x" style={{textAlign:'center'}}>$654.39</td>
                            </tr>
                            <tr class="MuiTableRow-root css-1gqug66">
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>Emma</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>56789012</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>17 Jan, 2019</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall css-1o6fzn1" style={{textAlign:'center'}}>$36,881.30</td>
                                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall css-1thfh4x" style={{textAlign:'center'}}>$212.79</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default Bankers
