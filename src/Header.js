import React from 'react'
import { Link } from 'react-router-dom';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TocOutlinedIcon from '@material-ui/icons/TocOutlined';
import clsx from 'clsx';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import sideimg1 from './images/menu-img3.jpg'
import sideimg2 from './images/menu-img4.jpg'
import sideimg3 from './images/menu-img1.jpg'
import sideimg4 from './images/menu-img2.jpg'
import { AiOutlineClose } from "react-icons/ai";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles ({
  list: {
    width: 1850,
  },
  fullList: {
    width: 'auto',
  },
  cart: {
    width: 250,
  },
  fullCart: {
    width: 'auto',
  },

});

function Header(){
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
    left: false,
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
      onKeyDown={toggleDrawer(anchor, false)}>
      <div className='sidebar_inner'>
        <div className='sidebar'>
          <ClearOutlinedIcon className='side_close_icon'></ClearOutlinedIcon>
        </div>
        <div className='side_area_inner'>
          <div className='product_list_category'>
            <div className='product_list_image'>
              <img src={sideimg1} alt="" className='side_img' />
            </div>
            <div className='product_list_content'>
              <h5>Vests</h5>
            </div>
          </div>
          <div className='product_list_category'>
            <div className='product_list_image'>
              <img src={sideimg2} alt="" className='side_img'/>
            </div>
            <div className='product_list_content'>
              <h5>Sales</h5>
            </div>
          </div>
          <div className='product_list_category'>
            <div className='product_list_image'>
              <img src={sideimg3} alt="" className='side_img'/>
            </div>
            <div className='product_list_content'>
              <h5>New Items</h5>
            </div>
          </div>
          <div className='product_list_category'>
            <div className='product_list_image'>
              <img src={sideimg4} alt="" className='side_img'/>
            </div>
            <div className='product_list_content'>
              <h5>Fashion</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const cart = (anchor) => (
    <div
      className={clsx(classes.cart, {
        [classes.fullCart]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <div className='sidebar_inner_cart'>
        <p>No products in the cart.</p>
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
             <li>
             <IconButton type="submit" className={classes.iconButton} aria-label="search" style={{color:'#000'}}>
      <SearchOutlinedIcon/>
      </IconButton>
          <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}/>
          </li>
             <li className='cart_section'>
             {['right','right'].map((anchor,index) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{index==0 ? <LocalMallOutlinedIcon/>: <TocOutlinedIcon/> }</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          { index==0 ? list(anchor) : cart(anchor)}
          </Drawer>
        </React.Fragment>
      ))} 
     </li>
             </ul>
          </div>
          </header>
      </div>
    </>
  )
}
export default Header; 