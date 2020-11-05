import './App.css';
import Icon from '@material-ui/core/Icon';
import {Button, Typography, makeStyles} from '@material-ui/core'
import Header from './Components/Header';


const useStyles=makeStyles(theme=>({
       root:{
         minHeight: '100vh',
         backgroundImage: `url(${process.env.PUBLIC_URL+ '/assets/bg.jpg'})`,
         backgroumdRepeat:'no-repeat',
         backgroundSize:'cover'
        }
}));

 function App() {
  const classes=useStyles();

  return (

    <div className={classes.root}>
      <Header/>
    </div>
  );
}

export default App;
