//THIS IS THE LOGIN PAGE I HAVE CREATED. IT CONTAINS MAINLY TWO FILE LOGIN AND SIGNUP. BOTH ARE WRAPPED IN  CONTAINER AND MADE TOGETHER USING TAB. SO U NEED TO HAVE MOTH THE FILES AND CREATE A FOLDER NAMED "containers" . In that create an index.jsx file which is used to club both the jsx files. Now in app.js we have to call the name of the container(Here it is given as SignInOutContainer)

import React, { useState } from 'react'
import { Paper,Typography,Tabs,Tab,Box} from '@mui/material'
import Login from '../Login';
import Signup from '../Signup';
const SignInOutContainer=()=>{
const [value,setValue]=useState(0)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle={width:340,margin:"20px auto",}
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    return (
        <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Sign In" style={{minWidth:"50%"}}/>
          <Tab label="Sign Up" style={{minWidth:"50%"}} />
        </Tabs>
        <TabPanel value={value} index={0}>
       <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Signup/>
      </TabPanel>
      </Paper>
      
    )
}

export default SignInOutContainer;