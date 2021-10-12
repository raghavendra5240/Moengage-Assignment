import {useState,useRef } from "react";
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:90,
    display:'flex',
    flexDirection:"column"
  },
  paper: {
    height:430,
    width:370,
    backgroundColor:"white",
   padding:40,
  display:"block",
  marginLeft:"auto",
  marginRight:"auto"
  },
 
  heading :{
    color:'#002884',
     display:"block",
  marginLeft:60,
  marginRight:"auto",
   fontSize:30,
    fontWeight:"bold"

  },
  subheading:{
    color:'#002884',
   textAlign:"left",
    fontSize:15,
 
  },
 
  image:{
    height:100,
    width:100},
  div1 :{
    display:"flex",
    flexDirection:"row"
  } ,
  upload :{
     display:"flex"
  } ,
  link:{
    textDecoration:"none",
    color:"white"
  },
  div2:{
    marginLeft:100
  },
  button:{
    width:230
  }

}));


export default function Signin() {
 const classes = useStyles();

   
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup,setSignup]=useState([])

  

  const onsubmit = (e) => {
    e.preventDefault();
    setSignup([
      ...signup,

      {
        id: new Date().getTime().toString(),
        name:name,
        email: email,
        password:password, 
      },
    ]);
    
  };
   
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/login`; 
    history.push(path);
  }


 
  return (
    
     <>
      <div className={classes.root}>
        <form onSubmit={(e) => {
          onsubmit(e);
        }} >
       
        
        <br/><br/>
         <div className={classes.div1}>
        <Paper className={classes.paper}>
          <div className={classes.div2}>
        <Typography className={classes.heading}>  Sign Up</Typography>
        <br /><br />
        <Typography className={classes.subheading}> Enter Name </Typography>
        
        <TextField
        variant="outlined"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
         <br /><br />
         <Typography className={classes.subheading}> Enter mail id </Typography>
        
        <TextField
        variant="outlined"
          type="text"
          placeholder="Enter mail id "
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br />
        
       
        <br />
        <Typography className={classes.subheading}> Enter Password </Typography>
        <TextField
        variant="outlined"
          type="text"
           placeholder="Enter Password "
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <br /><br />
       
         <Button variant="contained" color="primary" type="submit" className={classes.button}  onClick={routeChange}> Sign in</Button><br/><br/>
        <Link to="/login">
               Already have an account? Sign In
              </Link>
              </div>
          </Paper>  
        </div>
          </form> 
          
    </div>
   </>
  );
}

