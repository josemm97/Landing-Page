import './App.css';

import { makeStyles} from '@material-ui/core'
import Header from './Components/Header';
import PlaceToVisit from './Components/PlaceToVisit'


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
      <PlaceToVisit/>
    
    </div>
  );
}

export default App;
