
import "../src/assets/js/main";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const cards = [
        { id: 1, title: "Card 1", content: "This is Card 1" },
        { id: 2, title: "Card 2", content: "This is Card 2" },
    ];


    return (
        //     <>
        //     {/* <!-- preloader area start --> */}
        //     {/* <div className="preloader" id="preloader">
        //         <div className="preloader-inner">
        //             <div id="wave1">
        //             </div>
        //             <div className="spinner">
        //                 <div className="dot1"></div>
        //                 <div className="dot2"></div>
        //             </div>
        //         </div>
        //     </div> */}
        //     {/* <!-- preloader area end --> */}
        //     <div className="body-overlay" id="body-overlay"></div>

        //     <div className="container">
        //         <div className="main-home-area">
        //             <div className="profile-area">
        //                 <div className="media">
        //                     <a href="#" className="thumb">
        //                         <img src="assets/img/profile.png" alt="img" />
        //                     </a>
        //                     <div className="media-body">
        //                         <span className="profile-name">Hello, Devon Lane</span>
        //                         <div className="balance">$500 <span><img src="assets/img/icon/dollar-sign.png" alt="img" /></span></div>
        //                     </div>
        //                 </div>
        //                 <div className="btn-wrap">
        //                     <a className="icon-btn" href="search.html"><i className="ri-search-line"></i></a>
        //                     <a className="icon-btn" href="notification.html"><i className="ri-notification-3-line"></i> <span className="badge">2</span></a>
        //                 </div>
        //             </div>  
        //             <div className="banner-slider owl-carousel pd-top-110 mb-4">
        //                 <div className="item">
        //                     <img src="assets/img/banner/1.png" alt="img" />
        //                 </div>
        //                 <div className="item">
        //                     <img src="assets/img/banner/2.png" alt="img" />
        //                 </div>
        //                 <div className="item">
        //                     <img src="assets/img/banner/3.png" alt="img" />
        //                 </div>
        //             </div>
        //             <h6 className="mb-3">In Play</h6>
        //             <div className="home-category-slider owl-carousel">
        //                 <div className="item">
        //                     <a className="home-category-item-wrap" href="sports.html">
        //                         <img src="assets/img/category/football.png" alt="img" />
        //                         <span>
        //                             Football
        //                         </span>
        //                     </a>
        //                 </div>
        //                 <div className="item">
        //                     <a className="home-category-item-wrap" href="sports.html">
        //                         <img src="assets/img/category/basketball.png" alt="img" />
        //                         <span>Basketball</span>
        //                     </a>
        //                 </div>
        //                 <div className="item">
        //                     <a className="home-category-item-wrap" href="sports.html">
        //                         <img src="assets/img/category/baseball.png" alt="img" />
        //                         <span>Baseball</span>
        //                     </a>
        //                 </div>
        //                 <div className="item">
        //                     <a className="home-category-item-wrap" href="sports.html">
        //                         <img src="assets/img/category/soccerball.png" alt="img" />
        //                         <span>Soccerball</span>
        //                     </a>
        //                 </div>
        //                 <div className="item">
        //                     <a className="home-category-item-wrap" href="sports.html">
        //                         <img src="assets/img/category/cricket.png" alt="img" />
        //                         <span>Cricket</span>
        //                     </a>
        //                 </div>
        //                 <div className="item">
        //                     <a className="home-category-item-wrap" href="sports.html">
        //                         <img src="assets/img/category/video-game.png" alt="img" />
        //                         <span>Video Game</span>
        //                     </a>
        //                 </div>
        //                 <div className="item">
        //                     <a className="home-category-item-wrap" href="sports.html">
        //                         <img src="assets/img/category/table-tannis.png" alt="img" />
        //                         <span>Table Tennis</span>
        //                     </a>
        //                 </div>
        //             </div> 
        //             <div className="sports-wrap mt-4">
        //                 <div className="sports-slider slider-nav">
        //                     <div className="sports-slider-item">
        //                         <i className="fa fa-circle me-2"></i> Live Now
        //                     </div>
        //                     <div className="sports-slider-item">
        //                         Upcoming
        //                     </div>
        //                     <div className="sports-slider-item">
        //                         1st period
        //                     </div>
        //                     <div className="sports-slider-item">
        //                         2nd period
        //                     </div>
        //                 </div>
        //                 <div className="sports-slider-wrap slider-for">
        //                     <div className="slider-content">
        //                         <div className="single-product-wrap">
        //                             <h6 className="title">Super League</h6>
        //                             <div className="details">
        //                                 <div className="thumb">
        //                                     <img src="assets/img/product/01.png" alt="img" />
        //                                     <h6 className="team-name">Fc Goa</h6>
        //                                 </div>
        //                                 <div className="betting-wrap">
        //                                     <h2>1 : 2</h2>
        //                                     <div className="time">
        //                                         <i className="fa fa-circle"></i>
        //                                         35:30
        //                                     </div>
        //                                     <a className="btn btn-base" href="bet.html">Bet Now</a>
        //                                 </div>
        //                                 <div className="thumb"><img src="assets/img/product/02.png" alt="img" />
        //                                     <h6 className="team-name">Chennaiyin FC</h6>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="single-product-wrap">
        //                             <h6 className="title">Premier League</h6>
        //                             <div className="details">
        //                                 <div className="thumb"><img src="assets/img/product/03.png" alt="img" /><h6 className="team-name">Barcelona</h6></div>
        //                                 <div className="betting-wrap">
        //                                     <h2>1 : 2</h2>
        //                                     <div className="time">
        //                                         <i className="fa fa-circle"></i>
        //                                         35:30
        //                                     </div>
        //                                     <a className="btn btn-base" href="bet.html">Bet Now</a>
        //                                 </div>
        //                                 <div className="thumb"><img src="assets/img/product/04.png" alt="img" /><h6 className="team-name">Man United</h6></div>
        //                             </div>
        //                         </div>
        //                         <div className="single-product-wrap">
        //                             <h6 className="title">Europa League</h6>
        //                             <div className="details">
        //                                 <div className="thumb"><img src="assets/img/product/05.png" alt="img" /><h6 className="team-name">Juventus</h6></div>
        //                                 <div className="betting-wrap">
        //                                     <h2>1 : 2</h2>
        //                                     <div className="time">
        //                                         <i className="fa fa-circle"></i>
        //                                         35:30
        //                                     </div>
        //                                     <a className="btn btn-base" href="bet.html">Bet Now</a>
        //                                 </div>
        //                                 <div className="thumb"><img src="assets/img/product/06.png" alt="img" /><h6 className="team-name">Nante</h6></div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="slider-content">
        //                         <div className="single-product-wrap">
        //                             <h6 className="title">Premier League</h6>
        //                             <div className="details">
        //                                 <div className="thumb"><img src="assets/img/product/03.png" alt="img" /><h6 className="team-name">Barcelona</h6></div>
        //                                 <div className="betting-wrap">
        //                                     <h2>1 : 2</h2>
        //                                     <div className="time">
        //                                         <i className="fa fa-circle"></i>
        //                                         35:30
        //                                     </div>
        //                                     <a className="btn btn-base" href="bet.html">Bet Now</a>
        //                                 </div>
        //                                 <div className="thumb"><img src="assets/img/product/04.png" alt="img" /><h6 className="team-name">Man United</h6></div>
        //                             </div>
        //                         </div>
        //                         <div className="single-product-wrap">
        //                             <h6 className="title">Super League</h6>
        //                             <div className="details">
        //                                 <div className="thumb">
        //                                     <img src="assets/img/product/01.png" alt="img" />
        //                                     <h6 className="team-name">Fc Goa</h6>
        //                                 </div>
        //                                 <div className="betting-wrap">
        //                                     <h2>1 : 2</h2>
        //                                     <div className="time">
        //                                         <i className="fa fa-circle"></i>
        //                                         35:30
        //                                     </div>
        //                                     <a className="btn btn-base" href="bet.html">Bet Now</a>
        //                                 </div>
        //                                 <div className="thumb"><img src="assets/img/product/02.png" alt="img" />
        //                                     <h6 className="team-name">Chennaiyin FC</h6>
        //                                 </div>
        //                             </div>
        //                         </div>                      
        //                         <div className="single-product-wrap">
        //                             <h6 className="title">Europa League</h6>
        //                             <div className="details">
        //                                 <div className="thumb"><img src="assets/img/product/05.png" alt="img" /><h6 className="team-name">Juventus</h6></div>
        //                                 <div className="betting-wrap">
        //                                     <h2>1 : 2</h2>
        //                                     <div className="time">
        //                                         <i className="fa fa-circle"></i>
        //                                         35:30
        //                                     </div>
        //                                     <a className="btn btn-base" href="bet.html">Bet Now</a>
        //                                 </div>
        //                                 <div className="thumb"><img src="assets/img/product/06.png" alt="img" /><h6 className="team-name">Nante</h6></div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="slider-content">
        //                         <div className="single-product-wrap">
        //                             <h6 className="title">Europa League</h6>
        //                             <div className="details">
        //                                 <div className="thumb"><img src="assets/img/product/05.png" alt="img" /><h6 className="team-name">Juventus</h6></div>
        //                                 <div className="betting-wrap">
        //                                     <h2>1 : 2</h2>
        //                                     <div className="time">
        //                                         <i className="fa fa-circle"></i>
        //                                         35:30
        //                                     </div>
        //                                     <a className="btn btn-base" href="bet.html">Bet Now</a>
        //                                 </div>
        //                                 <div className="thumb"><img src="assets/img/product/06.png" alt="img" /><h6 className="team-name">Nante</h6></div>
        //                             </div>
        //                         </div>
        //                         <div className="single-product-wrap">
        //                             <h6 className="title">Super League</h6>
        //                             <div className="details">
        //                                 <div className="thumb">
        //                                     <img src="assets/img/product/01.png" alt="img" />
        //                                     <h6 className="team-name">Fc Goa</h6>
        //                                 </div>
        //                                 <div className="betting-wrap">
        //                                     <h2>1 : 2</h2>
        //                                     <div className="time">
        //                                         <i className="fa fa-circle"></i>
        //                                         35:30
        //                                     </div>
        //                                     <a className="btn btn-base" href="bet.html">Bet Now</a>
        //                                 </div>
        //                                 <div className="thumb"><img src="assets/img/product/02.png" alt="img" />
        //                                     <h6 className="team-name">Chennaiyin FC</h6>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="single-product-wrap">
        //                             <h6 className="title">Premier League</h6>
        //                             <div className="details">
        //                                 <div className="thumb"><img src="assets/img/product/03.png" alt="img" /><h6 className="team-name">Barcelona</h6></div>
        //                                 <div className="betting-wrap">
        //                                     <h2>1 : 2</h2>
        //                                     <div className="time">
        //                                         <i className="fa fa-circle"></i>
        //                                         35:30
        //                                     </div>
        //                                     <a className="btn btn-base" href="bet.html">Bet Now</a>
        //                                 </div>
        //                                 <div className="thumb"><img src="assets/img/product/04.png" alt="img" /><h6 className="team-name">Man United</h6></div>
        //                             </div>
        //                         </div>                       
        //                     </div>
        //                     <div className="slider-content">
        //                         <div className="single-product-wrap">
        //                             <h6 className="title">Super League</h6>
        //                             <div className="details">
        //                                 <div className="thumb">
        //                                     <img src="assets/img/product/02.png" alt="img" />
        //                                     <h6 className="team-name">Chennaiyin FC</h6>
        //                                 </div>
        //                                 <div className="betting-wrap">
        //                                     <h2>1 : 2</h2>
        //                                     <div className="time">
        //                                         <i className="fa fa-circle"></i>
        //                                         35:30
        //                                     </div>
        //                                     <a className="btn btn-base" href="bet.html">Bet Now</a>
        //                                 </div>
        //                                 <div className="thumb"><img src="assets/img/product/01.png" alt="img" />
        //                                     <h6 className="team-name">Fc Goa</h6>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="single-product-wrap">
        //                             <h6 className="title">Europa League</h6>
        //                             <div className="details">
        //                                 <div className="thumb"><img src="assets/img/product/05.png" alt="img" /><h6 className="team-name">Juventus</h6></div>
        //                                 <div className="betting-wrap">
        //                                     <h2>1 : 2</h2>
        //                                     <div className="time">
        //                                         <i className="fa fa-circle"></i>
        //                                         35:30
        //                                     </div>
        //                                     <a className="btn btn-base" href="bet.html">Bet Now</a>
        //                                 </div>
        //                                 <div className="thumb"><img src="assets/img/product/06.png" alt="img" /><h6 className="team-name">Nante</h6></div>
        //                             </div>
        //                         </div>  
        //                         <div className="single-product-wrap">
        //                             <h6 className="title">Premier League</h6>
        //                             <div className="details">
        //                                 <div className="thumb"><img src="assets/img/product/03.png" alt="img" /><h6 className="team-name">Barcelona</h6></div>
        //                                 <div className="betting-wrap">
        //                                     <h2>1 : 2</h2>
        //                                     <div className="time">
        //                                         <i className="fa fa-circle"></i>
        //                                         35:30
        //                                     </div>
        //                                     <a className="btn btn-base" href="bet.html">Bet Now</a>
        //                                 </div>
        //                                 <div className="thumb"><img src="assets/img/product/04.png" alt="img" /><h6 className="team-name">Man United</h6></div>
        //                             </div>
        //                         </div>

        //                     </div>
        //                 </div>                    
        //             </div>

        //             <div className="main-footer-bottom d-block text-center">
        //                 <ul>
        //                     <li>
        //                         <a className="active" href="#">
        //                             <img src="assets/img/icon/svg/home.svg" alt="icon" />
        //                             Home
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="sports.html">
        //                             <img src="assets/img/icon/svg/sports.svg" alt="img" />
        //                             Sports
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a className="menu-bar" href="#">
        //                             <img src="assets/img/icon/svg/ticket.svg" alt="img" />
        //                             My Bet
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="#">
        //                             <img src="assets/img/icon/svg/document.svg" alt="img" />
        //                             News
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="#">
        //                             <img src="assets/img/icon/svg/profile.svg" alt="img" />
        //                             Profile
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>  
        //    </>
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


            <div className="single-page-area">
                <div className="title-area justify-content-between">
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z" /></svg>
                    <h2 className="text-center" style={{ color: "#f8f9fa", fontSize: "25px", marginLeft: "82px" }}>Missions</h2>
                    {/* <div style={{ color: "#f8f9fa" }} className="balance">$500 <span><img src="assets/img/icon/dollar-sign.png" alt="img" /></span></div> */}
                </div>
                <div style={{ background: "#0f1216" }} className="container mt-4 p-3">
                    <div className="sub-container">
                        <Slider {...settings}>
                            {cards.map((card) => (
                                <div key={card.id} style={{ padding: "10px" }}>
                                    <div style={{ padding: "25px", background: "#07080a", borderRadius: "10px", boxShadow: "0 4px 8px 0 rgba(29, 28, 28, 0.2), 0 6px 20px 0 rgba(47, 46, 46, 0.19)" }}>
                                       <div style={{  boxShadow: "0 4px 8px 0 rgba(29, 28, 28, 0.2), 0 6px 20px 0 rgba(47, 46, 46, 0.19)", padding: "8px", background: "#0f1216", width: "100px", textAlign: "center", borderRadius: "7px"}}>
                                      <div>
                                      <img style={{marginLeft: "20px", marginBottom: "6px", marginTop: "16px"}} width={40} src="/logo/48.png" alt="" srcset="" />
                                      <p style={{color: "#e1e1e1"}}>Bitclub</p>
                                      <button style={{border: "none", outline: "none", fontSize: "14px", background: "#07080a", color: "#e1e1e1", borderRadius: "12px"}}>
                                        +2000 BP
                                      </button>
                                      </div>
                                       </div>
                                        <button style={{ float: "right", background: "#0f1216", color: "#e1e1e1", marginTop: "-50px", marginRight: "-18px" }} className="btn">
                                        Get
                                        </button>
                                        <h5 style={{float: "right", marginTop: "-120px", color: '#e1e1e1', padding: "10px", borderRadius: "7px", boxShadow: "0 4px 8px 0 rgba(29, 28, 28, 0.2), 0 6px 20px 0 rgba(47, 46, 46, 0.19)"}}>
                                            Partners
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="profile-details" style={{ backgroundImage: "url(assets/img/other/profile-bg.png)" }}>
                    <ul>
                        <li>
                            <h6>06</h6>
                            <span>Total Game </span>
                        </li>
                        <li>
                            <h6>20</h6>
                            <span>Total Wins  </span>
                        </li>
                        <li>
                            <h6>15</h6>
                            <span>Total Loses </span>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <ul className="profile-list-inner">
                        <li style={{ background: "#0f1216" }} className="p-1 rounded">
                            <a className="single-profile-wrap" href="#" style={{ marginBottom: "-30px", background: "#07080a" }}>
                                <img width={40} style={{ borderRadius: "50%" }} src="https://img.icons8.com/m_rounded/512/FFFFFF/facebook.png" alt="" srcset="" />
                                Follow Bitclub on Facebook
                                <button className="claimbtn">
                                    Do
                                </button>
                            </a>
                            <span style={{ color: "#e1e1e1", marginLeft: "70px", fontSize: "12px", marginBottom: "12px" }}>+500 BP</span>
                        </li>
                        <li style={{ background: "#0f1216" }} className="p-1 rounded">
                            <a className="single-profile-wrap" href="#" style={{ marginBottom: "-30px", background: "#07080a" }}>
                                <img width={40} src="https://clipart-library.com/images/dc4LABqni.png" alt="" srcset="" />
                                Subscribe to Bitclub
                                <button className="claimbtn">
                                    Do
                                </button>
                            </a>
                            <span style={{ color: "#e1e1e1", marginLeft: "70px", fontSize: "12px", }}>+500 BP</span>
                        </li>
                        <li style={{ background: "#0f1216" }} className="p-1 rounded">
                            <a className="single-profile-wrap" href="#" style={{ marginBottom: "-30px", background: "#07080a" }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofki2i-o95YcfWGaj96gqaT5ABn_oQaLpHg&s" width={40} alt="" srcset="" />
                                React to this post on TG
                                <button className="claimbtn">
                                    Do
                                </button>
                            </a>
                            <span style={{ color: "#e1e1e1", marginLeft: "70px", fontSize: "12px", marginBottom: "12px" }}>+500 BP</span>
                        </li>
                        <li style={{ background: "#0f1216" }} className="p-1 rounded">
                            <a style={{ background: "#07080a" }} className="single-profile-wrap" href="#">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofki2i-o95YcfWGaj96gqaT5ABn_oQaLpHg&s" width={40} alt="" srcset="" />
                                React to this post on TG
                                <button className="claimbtn">
                                    Do
                                </button>
                            </a>
                        </li>
                        <li style={{ background: "#0f1216" }} className="p-1 rounded">
                            <div style={{ background: "#07080a" }} className="single-profile-wrap">
                                <img width={40} src="https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png" alt="" srcset="" />
                                Follow Bitclub on X
                                <button className="claimbtn">
                                    Do
                                </button>
                            </div>
                        </li>
                        <li style={{ background: "#0f1216" }} className="p-1 rounded">
                            <div style={{ background: "#07080a" }} className="single-profile-wrap">
                                <img width={40} src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png" alt="" srcset="" />
                                Follow Bitclub on Instagram
                                <button className="claimbtn">
                                    Do
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="main-footer-bottom d-block text-center">
                    <ul>
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M180-120q-25 0-42.5-17.5T120-180v-76l160-142v278H180Zm140 0v-160h320v160H320Zm360 0v-328L509-600l121-107 190 169q10 9 15 20.5t5 24.5v313q0 25-17.5 42.5T780-120H680ZM120-310v-183q0-13 5-25t15-20l300-266q8-8 18.5-11.5T480-819q11 0 21.5 3.5T520-804l80 71-480 423Z" /></svg><br />
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="sports.html">
                                <svg xmlns="#" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m140-220-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Z" /></svg><br />
                                Ranking
                            </a>
                        </li>
                        <li>
                            <a className="menu-bar" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z" /></svg><br />
                                Task
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" /></svg><br />
                                Frens
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80 120-280v-400l360-200 360 200v400L480-80ZM364-590q23-24 53-37t63-13q33 0 63 13t53 37l120-67-236-131-236 131 120 67Zm76 396v-131q-54-14-87-57t-33-98q0-11 1-20.5t4-19.5l-125-70v263l240 133Zm40-206q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm40 206 240-133v-263l-125 70q3 10 4 19.5t1 20.5q0 55-33 98t-87 57v131Z" /></svg><br />
                                Airdrop
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App
