import React from 'react'
import {Typography} from '@material-ui/core';
import {Breadcrumbs} from "@material-ui/core";
import { Link } from 'react-router-dom';
import product_img1 from './images/shop-img1-600x821.jpg';
import product_img2 from './images/shop-img2-600x821.jpg';
import product_img3 from './images/shop-img3-600x821.jpg';
import product_img4 from './images/shop-img4-600x821.jpg';
import product_img5 from './images/shop-img5-1-600x821.jpg';
import product_img6 from './images/shop-img6-600x821.jpg';
import product_img7 from './images/shop-img7-600x821.jpg';
import product_img8 from './images/shop-img8-600x821.jpg';
import side_img from './images/sidebar-shop-img1.jpg';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
 function Product() {
  return (
    <>
    <div className='product_section'>
        <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" to="/">
        Home
        </Link>
        <Typography color="text.primary">Shop</Typography>
      </Breadcrumbs>
      </div>
        <div className='product_view conatiner'>
        <div className='row'>
            <main className='pro_sec'>
                <div className='product_inner_sec'>
                <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
                <div className='product_sidebar'>
                    <div className='side_img'>
                        <img src={side_img} alt="" />
                    </div>
                    <div></div>
                    <div className='product_category'>
                        <h5>Categories</h5>
                        <ul>
                            <li>
                                <Link to='/'>Anklet</Link>
                                <span> (3) </span>
                            </li>
                            <li>
                                <Link to='/'>Crystal</Link>
                                <span> (1) </span>
                            </li>
                            <li>
                                <Link to='/'>Dresses </Link>
                                <span> (3) </span>
                            </li>
                            <li>
                                <Link to='/'>Fashion</Link>
                                <span> (12) </span>
                            </li>
                            <li>
                                <Link to='/'>furniture</Link>
                                <span> (8) </span>
                                <ul className='children'>
                                    <li>
                                    <Link to='/'>new</Link>
                                    <span>(4)</span>
                                    </li>
                                    <li>
                                    <Link to='/'>Retro</Link>
                                    <span>(4)</span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/'>gift</Link>
                                <span> (3) </span>
                            </li>
                            <li>
                                <Link to='/'>Jewelry</Link>
                                <span> (5) </span>
                            </li>
                            <li>
                                <Link to='/'>Man's</Link>
                                <span> (5) </span>
                            </li>
                            <li>
                                <Link to='/'>Metallic </Link>
                                <span> (1) </span>
                            </li>
                            <li>
                                <Link to='/'>New Items</Link>
                                <span> (16) </span>
                            </li>
                            <li>
                                <Link to='/'>Outdoors</Link>
                                <span> (8) </span>
                            </li>
                            <li>
                                <Link to='/'>Pendant</Link>
                                <span> (1) </span>
                            </li>
                            <li>
                                <Link to='/'>Perfume</Link>
                                <span> (5) </span>
                            </li>
                            <li>
                                <Link to='/'>Rings</Link>
                                <span> (3) </span>
                            </li>
                            <li>
                                <Link to='/'>Sales</Link>
                                <span> (8) </span>
                            </li>
                            <li>
                                <Link to='/'>Shades</Link>
                                <span> (1) </span>
                            </li>
                            <li>
                                <Link to='/'>Silver</Link>
                                <span> (5) </span>
                            </li>
                            <li>
                                <Link to='/'>Skirts</Link>
                                <span> (2) </span>
                            </li>
                            <li>
                                <Link to='/'>Street-style</Link>
                                <span> (5) </span>
                            </li>
                            <li>
                                <Link to='/'>Sunglasses </Link>
                                <span> (1) </span>
                            </li>
                            <li>
                                <Link to='/'>Tops</Link>
                                <span> (4) </span>
                            </li>
                            <li>
                                <Link to='/'>Vests </Link>
                                <span> (11) </span>
                            </li>
                            <li>
                                <Link to='/'>Woman's </Link>
                                <span> (8) </span>
                            </li>
                        </ul>
                    </div>
                    <div className='product_tag'>
                        <h5>Tags</h5>
                        <div></div>
                    </div>
                </div>
                </div>
                <div className='col-md-8 col-lg-8 col-sm-8 col-xl-8'>
                    <div className='product_view_sec '>
                        <div className="product-woo-results"><p className="product-result-count">
                                    Showing 1–8 of 102 results</p>
                                    <form className="product-ordering" method="get">
                                    <select name="orderby" className="orderby select2-hidden-accessible" aria-label="Shop order" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                    <option value="menu_order" selected="selected" data-select2-id="3">Default sorting</option>
                                    <option value="popularity" data-select2-id="6">Sort by popularity</option>
                                    <option value="rating" data-select2-id="7">Sort by average rating</option>
                                    <option value="date" data-select2-id="8">Sort by latest</option>
                                    <option value="price" data-select2-id="9">Sort by price: low to high</option>
                                    <option value="price-desc" data-select2-id="10">Sort by price: high to low</option>
                                    </select>
                                    <span className="select2 select2-container select2-container--default select2-container--below" dir="ltr" data-select2-id="2" >
                                    <span className="selection">
                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-orderby-id-container">
                                    <span className="select2-selection__arrow" role="presentation">
                                    <b role="presentation"></b>
                                    </span>
                                    </span>
                                    </span>
                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                    </span>
                                    <input type="hidden" name="paged" value="1"/>
                                    </form>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img1} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <span>$ </span>
                                             230.00 – 
                                             <span> $ </span>
                                             250.00
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img2} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <span>$ </span>
                                             230.00 – 
                                             <span> $ </span>
                                             250.00
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img3} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <span>$ </span>
                                             230.00 – 
                                             <span> $ </span>
                                             250.00
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img4} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <span>$ </span>
                                             230.00 – 
                                             <span> $ </span>
                                             250.00
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img5} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <span>$ </span>
                                             230.00 – 
                                             <span> $ </span>
                                             250.00
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img6} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <span>$ </span>
                                             230.00 – 
                                             <span> $ </span>
                                             250.00
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img7} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <span>$ </span>
                                             230.00 – 
                                             <span> $ </span>
                                             250.00
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img8} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <span>$ </span>
                                             230.00 – 
                                             <span> $ </span>
                                             250.00
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <nav className="woocommerce-pagination">
                            <span aria-current="page" className="page-numbers current">01</span>
                            <Link className="page-numbers" to="/">02</Link>
                            <span className="page-numbers dots" to='/'>…</span>
                            <Link className="page-numbers" to='/'>012</Link>
                            <Link className="page-numbers" to='/'>013</Link>
                            <Link className="next page-numbers" to='/'>
                            <ArrowForwardIosOutlinedIcon/>
                            </Link></nav>
                    </div>
                </div>
                </div>
            </main>
            </div>
        </div>
    </div>
    </>
  )
}
export default Product;
