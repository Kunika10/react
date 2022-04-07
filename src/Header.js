import React from 'react'
import { Link } from 'react-router-dom';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TocOutlinedIcon from '@material-ui/icons/TocOutlined';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
const useStyles = makeStyles({
  list: {
    width: 1850,
  },
  fullList: {
    width: 'auto',
  },
});

function Header(){
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='sidebar_inner'>
        
      </div>
      </div>
);


  return (
    <>



      <div className='header-section'>
      <header className='triss_header'>
        <div className='navigation'>
         <ul className=''>
         <li>
         <Link to="/" className='nav-sec'>Valeska</Link>
         </li>
         </ul>
         <ul className='navigation_ul'>
             <li><Link to="/" className='nav-sec'> Home</Link></li>
             <li><Link to="/" className='nav-sec'>Pages</Link></li>
             <li><Link to="product" className='nav-sec'>Shop</Link></li>
             <li><Link to="/" className='nav-sec'>Blog</Link></li>
             <li><Link to="/" className='nav-sec'>Landing</Link></li>
             <li><Link to="/" className='nav-sec'><SearchOutlinedIcon/></Link></li>
             <li><Link to="/" className='nav-sec'><LocalMallOutlinedIcon/></Link> </li>
             <li><Link to=""  className='nav-sec'><TocOutlinedIcon/>
             
             
             {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className='sidebar_button' onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
        
      ))} 
      </Link></li>
             </ul>
          </div>
          </header>
      </div>
    </>
  )
}
export default Header; 