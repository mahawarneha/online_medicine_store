// import Header from '../../components/Header/Header
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
  return (
    <>
      <div className='site-wrap '>
        <div className="site-blocks-cover " >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mx-auto ">
                <div className="row justify-content-center mb-5">
                  <div className="col-lg-6 ">
                    <div className='text'>
                      <p>Welcome to our Medicine Store </p>
                      <p className='wellness'>"wellness for your family Wellness for your life...!" </p>
                      <button><Link to='/registration' className="btn btn-primary px-5 py-3" >Shop Now</Link></button>
                    </div>
                  </div>
                  <div className="col-lg-6 text-center">
                    <img></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Home;
