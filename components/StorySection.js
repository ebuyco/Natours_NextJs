import React from 'react';
import VMp4 from '../public/static/video.mp4';
import VWebm from '../public/static/video.webm';

const StorySection = () => (
      <>
           <section className="section-stories">
                    <div className="bg-video">
                            <video autoPlay muted loop className="bg-video__content">
                                    <source src={VMp4} type="video/mp4"/>
                                    <source src={VWebm} type="video/webm"/>
                            </video>
                    </div>
           </section>
      </>
);


export default StorySection;
