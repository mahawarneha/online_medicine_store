// import Header from '../../components/Header/Header';
import './about.css'
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <div className='about'>
      <div className='about-heading'>About Us</div>
      <div className='paragraph'>
        <span>With a vision of bridging the gap between a pharmacy and the consumers. A vision that quickly broadened up and helped it in becoming more than just a mere online portal, to an online marketplace for shopping medicines to Health Supplements and much more. What draws a major distinction between us and our contemporaries is the way we promote a harmonious relationship between the sellers and the buyers for the greater good. With an ever-expanding range of products and services. While this will brings medicines at your fingertips and at affordable prices, it also makes shopping online an easy task. Not just for the consumers, even for the sellers & the brands, this platform makes selling products easy and hassle-free and we help you look after your own health effortlessly as well as take care of loved ones wherever they may reside in India. You can buy and send medicines from any corner of the country. </span>
           </div>
           <div><Link to="/" className='home-link'> Back to home 
           </Link>
           </div>
      </div>
    </>
  );
};
export default About;
