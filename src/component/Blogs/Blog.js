import React from 'react';
import TypewriterComponent from 'typewriter-effect';
const Blog = () => {
  return (
    <div >
     <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
              .start()
                .typeString(
                  '<h1 style="color:#146C94; margin-top: 250px ; font-size:50px; font-weight:600 ;">Coming</h1>'
                )
                .pauseFor(1000)
                .start()
                .typeString(
                  '<h1 style="color:#146C94; margin-bottom: 250px; font-size:50px; font-weight:600;">SooooooN!!!</h1>'
                )
                .pauseFor(1000)
                
                .stop();
            }}
          />
    </div>
  );
};

export default Blog;