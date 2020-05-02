import Navigation from '../components/Navigation';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import FeatureSection from '../components/FeatureSection';
import TourSection from '../components/TourSection';
import StorySection from '../components/StorySection';

const Home = () => (
       <>
               <Navigation/>
                <Header/>
                <main>
                    <AboutSection/>
                    <FeatureSection/>
                    <TourSection/>
                    <StorySection/>
                </main>
       </>
);

export default Home;
