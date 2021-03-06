import React, { useEffect ,useState} from 'react';
import {makeStyles,AppBar,IconButton, Toolbar, Collapse}from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles=makeStyles((theme)=>({
    root:{
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     height:'100vh'
    },
    appbar:{
    background:'none'
    },
    appbarWrapper:{
    width: '80%',
    margin:'0 auto'
    
    },colorText:{
     color:'#5aff3d'
    },
    appbarTitle:{
      flexGrow:'1'
    },
    icon:{
    fontSize:'2em',
    color:'#fff',
   
    },
    title:{
    color:'#fff',
    fontSize:'4.5em'
    },
    container:{
    textAlign:'center'
    },
    goDown:{
     color:'#5aff3d',
     fontSize:'4rem',
    }
}));

   

function Header() {
    const classes=useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true)
    }, [])
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0} >
             <Toolbar className={classes.appbarWrapper}>
                  <h1 className={classes.appbarTitle}>My<span className={classes.colorText}>island</span></h1>
                  <IconButton>
                    <SortIcon className={classes.icon}/>
                  </IconButton>     
             </Toolbar>
            </AppBar>
           <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                <div className={classes.container}>
    
                    <h1 className={classes.title}>Welcome to <br /> My<span className={classes.colorText}>Island</span> </h1>
    
                     <IconButton>
                        <ExpandMoreIcon className={classes.goDown}/>
                    </IconButton> 
                  
    
                </div>
           </Collapse>
        </div>
    )
}

export default Header
