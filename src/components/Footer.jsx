import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {
  return <div>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.css"
          rel="stylesheet"
        />
        <div className="text-center text-white" style={{backgroundColor: "#3f51b5"}}>
          <div class="container">
            <div className="mt-5">
              <div className="row text-center d-flex justify-content-center pt-5">
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href=" " className="text-white">About us</a>
                  </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href=" " className="text-white">Communities</a>
                 </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href=" " className="text-white">Help</a>
                  </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href=" " className="text-white">Contact</a>
                  </h6>
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="mb-5">
              <div className="">
                <form action="">
                  <div className="row d-flex justify-content-center">
                    <div className="col-auto">
                      <p className="pt-2">
                        <h4 className="text-white">Sign up for our newsletter</h4>
                      </p>
                    </div>
                    <div className="col-md-5 col-12">
                      <div className="form-outline form-white mb-4" style={{border: "1px solid white", borderRadius: "5px"}}>
                        <input type="email" id="form5Example2" className="form-control" />
                        <label className="form-label" for="form5Example2">Email address</label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button type="submit" className="btn btn-outline-light mb-4">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="text-center mb-5">
              <a href=" " className="text-white me-4">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href=" " className="text-white me-4">
                <i className="fa fa-twitter"></i>
              </a>
              <a href=" " className="text-white me-4">
                <i className="fa fa-google"></i>
              </a>
              <a href=" " className="text-white me-4">
                <i className="fa fa-instagram"></i>
              </a>
              <a href=" " className="text-white me-4">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href=" " className="text-white me-4">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div
            className="text-center p-3"
            style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            © 2020 Copyright:
            <a style={{background:"transparent", color:"#aefeff"}} href=" ">
              CommunityHunter.com
            </a>
          </div>
        </div>
  </div>;
};

export default Footer;
