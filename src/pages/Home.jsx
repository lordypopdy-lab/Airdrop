import React from 'react'

const Home = () => {
  return (
   <>
    {/* <!-- preloader area start --> */}
    {/* <div className="preloader" id="preloader">
        <div className="preloader-inner">
            <div id="wave1">
            </div>
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        </div>
    </div> */}
    {/* <!-- preloader area end --> */}
    <div className="body-overlay" id="body-overlay"></div>
    
    <div className="container">
        <div className="main-home-area">
            <div className="profile-area">
                <div className="media">
                    <a href="profile.html" className="thumb">
                        <img src="assets/img/profile.png" alt="img" />
                    </a>
                    <div className="media-body">
                        <span className="profile-name">Hello, Devon Lane</span>
                        <div className="balance">$500 <span><img src="assets/img/icon/dollar-sign.png" alt="img" /></span></div>
                    </div>
                </div>
                <div className="btn-wrap">
                    <a className="icon-btn" href="search.html"><i className="ri-search-line"></i></a>
                    <a className="icon-btn" href="notification.html"><i className="ri-notification-3-line"></i> <span className="badge">2</span></a>
                </div>
            </div>  
            <div className="banner-slider owl-carousel pd-top-110 mb-4">
                <div className="item">
                    <img src="assets/img/banner/1.png" alt="img" />
                </div>
                <div className="item">
                    <img src="assets/img/banner/2.png" alt="img" />
                </div>
                <div className="item">
                    <img src="assets/img/banner/3.png" alt="img" />
                </div>
            </div>
            <h6 className="mb-3">In Play</h6>
            <div className="home-category-slider owl-carousel">
                <div className="item">
                    <a className="home-category-item-wrap" href="sports.html">
                        <img src="assets/img/category/football.png" alt="img" />
                        <span>
                            Football
                        </span>
                    </a>
                </div>
                <div className="item">
                    <a className="home-category-item-wrap" href="sports.html">
                        <img src="assets/img/category/basketball.png" alt="img" />
                        <span>Basketball</span>
                    </a>
                </div>
                <div className="item">
                    <a className="home-category-item-wrap" href="sports.html">
                        <img src="assets/img/category/baseball.png" alt="img" />
                        <span>Baseball</span>
                    </a>
                </div>
                <div className="item">
                    <a className="home-category-item-wrap" href="sports.html">
                        <img src="assets/img/category/soccerball.png" alt="img" />
                        <span>Soccerball</span>
                    </a>
                </div>
                <div className="item">
                    <a className="home-category-item-wrap" href="sports.html">
                        <img src="assets/img/category/cricket.png" alt="img" />
                        <span>Cricket</span>
                    </a>
                </div>
                <div className="item">
                    <a className="home-category-item-wrap" href="sports.html">
                        <img src="assets/img/category/video-game.png" alt="img" />
                        <span>Video Game</span>
                    </a>
                </div>
                <div className="item">
                    <a className="home-category-item-wrap" href="sports.html">
                        <img src="assets/img/category/table-tannis.png" alt="img" />
                        <span>Table Tennis</span>
                    </a>
                </div>
            </div> 
            <div className="sports-wrap mt-4">
                <div className="sports-slider slider-nav">
                    <div className="sports-slider-item">
                        <i className="fa fa-circle me-2"></i> Live Now
                    </div>
                    <div className="sports-slider-item">
                        Upcoming
                    </div>
                    <div className="sports-slider-item">
                        1st period
                    </div>
                    <div className="sports-slider-item">
                        2nd period
                    </div>
                </div>
                <div className="sports-slider-wrap slider-for">
                    <div className="slider-content">
                        <div className="single-product-wrap">
                            <h6 className="title">Super League</h6>
                            <div className="details">
                                <div className="thumb">
                                    <img src="assets/img/product/01.png" alt="img" />
                                    <h6 className="team-name">Fc Goa</h6>
                                </div>
                                <div className="betting-wrap">
                                    <h2>1 : 2</h2>
                                    <div className="time">
                                        <i className="fa fa-circle"></i>
                                        35:30
                                    </div>
                                    <a className="btn btn-base" href="bet.html">Bet Now</a>
                                </div>
                                <div className="thumb"><img src="assets/img/product/02.png" alt="img" />
                                    <h6 className="team-name">Chennaiyin FC</h6>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-wrap">
                            <h6 className="title">Premier League</h6>
                            <div className="details">
                                <div className="thumb"><img src="assets/img/product/03.png" alt="img" /><h6 className="team-name">Barcelona</h6></div>
                                <div className="betting-wrap">
                                    <h2>1 : 2</h2>
                                    <div className="time">
                                        <i className="fa fa-circle"></i>
                                        35:30
                                    </div>
                                    <a className="btn btn-base" href="bet.html">Bet Now</a>
                                </div>
                                <div className="thumb"><img src="assets/img/product/04.png" alt="img" /><h6 className="team-name">Man United</h6></div>
                            </div>
                        </div>
                        <div className="single-product-wrap">
                            <h6 className="title">Europa League</h6>
                            <div className="details">
                                <div className="thumb"><img src="assets/img/product/05.png" alt="img" /><h6 className="team-name">Juventus</h6></div>
                                <div className="betting-wrap">
                                    <h2>1 : 2</h2>
                                    <div className="time">
                                        <i className="fa fa-circle"></i>
                                        35:30
                                    </div>
                                    <a className="btn btn-base" href="bet.html">Bet Now</a>
                                </div>
                                <div className="thumb"><img src="assets/img/product/06.png" alt="img" /><h6 className="team-name">Nante</h6></div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-content">
                        <div className="single-product-wrap">
                            <h6 className="title">Premier League</h6>
                            <div className="details">
                                <div className="thumb"><img src="assets/img/product/03.png" alt="img" /><h6 className="team-name">Barcelona</h6></div>
                                <div className="betting-wrap">
                                    <h2>1 : 2</h2>
                                    <div className="time">
                                        <i className="fa fa-circle"></i>
                                        35:30
                                    </div>
                                    <a className="btn btn-base" href="bet.html">Bet Now</a>
                                </div>
                                <div className="thumb"><img src="assets/img/product/04.png" alt="img" /><h6 className="team-name">Man United</h6></div>
                            </div>
                        </div>
                        <div className="single-product-wrap">
                            <h6 className="title">Super League</h6>
                            <div className="details">
                                <div className="thumb">
                                    <img src="assets/img/product/01.png" alt="img" />
                                    <h6 className="team-name">Fc Goa</h6>
                                </div>
                                <div className="betting-wrap">
                                    <h2>1 : 2</h2>
                                    <div className="time">
                                        <i className="fa fa-circle"></i>
                                        35:30
                                    </div>
                                    <a className="btn btn-base" href="bet.html">Bet Now</a>
                                </div>
                                <div className="thumb"><img src="assets/img/product/02.png" alt="img" />
                                    <h6 className="team-name">Chennaiyin FC</h6>
                                </div>
                            </div>
                        </div>                      
                        <div className="single-product-wrap">
                            <h6 className="title">Europa League</h6>
                            <div className="details">
                                <div className="thumb"><img src="assets/img/product/05.png" alt="img" /><h6 className="team-name">Juventus</h6></div>
                                <div className="betting-wrap">
                                    <h2>1 : 2</h2>
                                    <div className="time">
                                        <i className="fa fa-circle"></i>
                                        35:30
                                    </div>
                                    <a className="btn btn-base" href="bet.html">Bet Now</a>
                                </div>
                                <div className="thumb"><img src="assets/img/product/06.png" alt="img" /><h6 className="team-name">Nante</h6></div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-content">
                        <div className="single-product-wrap">
                            <h6 className="title">Europa League</h6>
                            <div className="details">
                                <div className="thumb"><img src="assets/img/product/05.png" alt="img" /><h6 className="team-name">Juventus</h6></div>
                                <div className="betting-wrap">
                                    <h2>1 : 2</h2>
                                    <div className="time">
                                        <i className="fa fa-circle"></i>
                                        35:30
                                    </div>
                                    <a className="btn btn-base" href="bet.html">Bet Now</a>
                                </div>
                                <div className="thumb"><img src="assets/img/product/06.png" alt="img" /><h6 className="team-name">Nante</h6></div>
                            </div>
                        </div>
                        <div className="single-product-wrap">
                            <h6 className="title">Super League</h6>
                            <div className="details">
                                <div className="thumb">
                                    <img src="assets/img/product/01.png" alt="img" />
                                    <h6 className="team-name">Fc Goa</h6>
                                </div>
                                <div className="betting-wrap">
                                    <h2>1 : 2</h2>
                                    <div className="time">
                                        <i className="fa fa-circle"></i>
                                        35:30
                                    </div>
                                    <a className="btn btn-base" href="bet.html">Bet Now</a>
                                </div>
                                <div className="thumb"><img src="assets/img/product/02.png" alt="img" />
                                    <h6 className="team-name">Chennaiyin FC</h6>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-wrap">
                            <h6 className="title">Premier League</h6>
                            <div className="details">
                                <div className="thumb"><img src="assets/img/product/03.png" alt="img" /><h6 className="team-name">Barcelona</h6></div>
                                <div className="betting-wrap">
                                    <h2>1 : 2</h2>
                                    <div className="time">
                                        <i className="fa fa-circle"></i>
                                        35:30
                                    </div>
                                    <a className="btn btn-base" href="bet.html">Bet Now</a>
                                </div>
                                <div className="thumb"><img src="assets/img/product/04.png" alt="img" /><h6 className="team-name">Man United</h6></div>
                            </div>
                        </div>                       
                    </div>
                    <div className="slider-content">
                        <div className="single-product-wrap">
                            <h6 className="title">Super League</h6>
                            <div className="details">
                                <div className="thumb">
                                    <img src="assets/img/product/02.png" alt="img" />
                                    <h6 className="team-name">Chennaiyin FC</h6>
                                </div>
                                <div className="betting-wrap">
                                    <h2>1 : 2</h2>
                                    <div className="time">
                                        <i className="fa fa-circle"></i>
                                        35:30
                                    </div>
                                    <a className="btn btn-base" href="bet.html">Bet Now</a>
                                </div>
                                <div className="thumb"><img src="assets/img/product/01.png" alt="img" />
                                    <h6 className="team-name">Fc Goa</h6>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-wrap">
                            <h6 className="title">Europa League</h6>
                            <div className="details">
                                <div className="thumb"><img src="assets/img/product/05.png" alt="img" /><h6 className="team-name">Juventus</h6></div>
                                <div className="betting-wrap">
                                    <h2>1 : 2</h2>
                                    <div className="time">
                                        <i className="fa fa-circle"></i>
                                        35:30
                                    </div>
                                    <a className="btn btn-base" href="bet.html">Bet Now</a>
                                </div>
                                <div className="thumb"><img src="assets/img/product/06.png" alt="img" /><h6 className="team-name">Nante</h6></div>
                            </div>
                        </div>  
                        <div className="single-product-wrap">
                            <h6 className="title">Premier League</h6>
                            <div className="details">
                                <div className="thumb"><img src="assets/img/product/03.png" alt="img" /><h6 className="team-name">Barcelona</h6></div>
                                <div className="betting-wrap">
                                    <h2>1 : 2</h2>
                                    <div className="time">
                                        <i className="fa fa-circle"></i>
                                        35:30
                                    </div>
                                    <a className="btn btn-base" href="bet.html">Bet Now</a>
                                </div>
                                <div className="thumb"><img src="assets/img/product/04.png" alt="img" /><h6 className="team-name">Man United</h6></div>
                            </div>
                        </div>
                                           
                    </div>
                </div>                    
            </div>
            
            <div className="main-footer-bottom d-block text-center">
                <ul>
                    <li>
                        <a className="active" href="main-home.html">
                            <img src="assets/img/icon/svg/home.svg" alt="icon" />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="sports.html">
                            <img src="assets/img/icon/svg/sports.svg" alt="img" />
                            Sports
                        </a>
                    </li>
                    <li>
                        <a className="menu-bar" href="my-bet.html">
                            <img src="assets/img/icon/svg/ticket.svg" alt="img" />
                            My Bet
                        </a>
                    </li>
                    <li>
                        <a href="blog.html">
                            <img src="assets/img/icon/svg/document.svg" alt="img" />
                            News
                        </a>
                    </li>
                    <li>
                        <a href="profile.html">
                            <img src="assets/img/icon/svg/profile.svg" alt="img" />
                            Profile
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>  
   </>
  )
}

export default Home
