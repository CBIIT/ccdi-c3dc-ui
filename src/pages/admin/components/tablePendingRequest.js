/* eslint-disable */
import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useQuery } from '@apollo/client';
import { CustomDataTable } from 'bento-components';
import { GET_LIST_USERS,useMock } from '../../../bento/adminData';

const TablePendingRequest = ({ classes }) => {

 // get data
 const { loading, error, data } = useQuery(GET_LIST_USERS, {
   context: {
        clientName: useMock? "mockService":""
    },
    variables: { 
      role: ["member","non-member"],
      accessStatus: ["requested"]
    },
 });


const cleanData = (data) =>{
  let res = [];
  data.map(d=>{

    //copy d
    let newData = {...d};
    // get name
    newData["name"] = d.lastName+" " +d.firstName;
    // get approved requests
    newData["arm"] = d.acl.length;

    res.push(newData);
  })

  return res;
}



const columns = [
  { name: 'name', label: 'Name' },
  { name: 'IDP', label: 'Account Type' },
  { name: 'email', label: 'Email' },
  { name: 'organization', label: 'Organization' },
  { name: 'arm', label: 'Arm(s)',  options: {
  customBodyRender: (value, tableMeta, updateValue) => (
    <Link href="#"> {value}</Link>
          )
      }},
  { name: 'creationDate', label: 'Access Request Date'},
  { name: 'userID', label: 'Actions',
    options: {
 customBodyRender: (value, tableMeta, updateValue) => { 
    const href = 'admin/'+value; 
    return(

            <Button variant="contained"  component={Link} href={href}
            classes={{
                root:classes.btn
              }}
                >
               View
            </Button>
          )
}
      }
  },
];

const options = {
  selectableRows: 'none',
  responsive: 'stacked',
  search: false,
  filter: false,
  searchable: false,
  print: false,
  download: false,
  viewColumns: false,
};

return ( <>
    <Grid container spacing={32}>
      <Grid item xs={12}>
        <CustomDataTable
          data={data?cleanData(data.User):[]}
          columns={columns}
          options={options}
        />
      </Grid>
    </Grid>
  </>)

};

const styles = (theme) => ({
  btn: {
    backgroundColor: '#7E4EC5',
    color: '#fff'
  }
});

export default withStyles(styles, { withTheme: true })(TablePendingRequest);
