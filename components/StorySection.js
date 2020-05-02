import React from 'react';


const StorySection = () => (
      <>
           <section className="section-stories">
                    <div className="bg-video">
                            <video autoPlay muted loop className="bg-video__content">
                                    <source src="../static/video.mp4" type="video/mp4"/>
                                    <source src="../static/video.webm" type="video/webm"/>
                            </video>
                    </div>
           </section>
      </>
);


export default StorySection;
