import Navigation from '../components/Navigation';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import FeatureSection from '../components/FeatureSection';
import TourSection from '../components/TourSection';

const Home = () => (
       <>
               <Navigation/>
                <Header/>
                <main>
                    <AboutSection/>
                    <FeatureSection/>
                    <TourSection/>
                </main>
       </>
);

export default Home;
