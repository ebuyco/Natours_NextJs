import Navigation from '../components/Navigation';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import FeatureSection from '../components/FeatureSection';

const Home = () => (
       <>
               <Navigation/>
                <Header/>
                <main>
                    <AboutSection/>
                    <FeatureSection/>
                </main>
       </>
);

export default Home;
