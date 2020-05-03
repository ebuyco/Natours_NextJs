// Core Components
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import FeatureSection from '../components/FeatureSection';
import TourSection from '../components/TourSection';
import StorySection from '../components/StorySection';
import BookSection from '../components/BookSection';
import Footer from '../components/Footer';

// Main Style Component
import HeaderStyle from '../components/styles/layout/HeaderStyle';
import NavStyle from '../components/styles/layout/NavStyle';
import AboutStyle from '../components/styles/layout/AboutStyle';
import BookStyle from '../components/styles/layout/BookStyle';
import FeatureStyle from '../components/styles/layout/FeatureStyle';
import TourStyle from '../components/styles/layout/TourStyle';
import StoryStyle from '../components/styles/layout/StoryStyle';

// Helper Components
import Typography from '../components/styles/base/Typography';
import Button from '../components/styles/base/Button';
import Utilities from '../components/styles/base/Utilities';
import Composition from '../components/styles/base/Composition';
import Grid from '../components/styles/base/Grid';
import FormStyle from '../components/styles/base/Form';
import FeatureBoxStyle from '../components/styles/base/FeatureBoxStyle';
import Card from '../components/styles/base/Card';
import VideoStyle from '../components/styles/base/BgVideo';

const Home = () => (
       <>
              <Grid>
              <Typography>
                    <Button>
                          <Utilities>
                                <NavStyle>
                                  <Navigation/>
                                </NavStyle>
                              <HeaderStyle>
                                  <Header/>
                              </HeaderStyle>
                              <main>
                                  <AboutStyle>
                                      <Composition>
                                          <AboutSection/>
                                      </Composition>
                                  </AboutStyle>
                                  <FeatureStyle>
                                      <FeatureBoxStyle>
                                          <FeatureSection/>
                                      </FeatureBoxStyle>
                                  </FeatureStyle>
                                  <TourStyle>
                                     <Card>
                                             <TourSection/>
                                      </Card>
                                  </TourStyle>
                                  <StoryStyle>
                                      <VideoStyle>
                                          <StorySection/>
                                      </VideoStyle>
                                  </StoryStyle>
                                  <BookStyle>
                                      <FormStyle>
                                          <BookSection/>
                                      </FormStyle>
                                  </BookStyle>
                              </main>
                              <Footer/>
                          </Utilities>
                    </Button>
              </Typography>
              </Grid>
       </>
);

export default Home;
