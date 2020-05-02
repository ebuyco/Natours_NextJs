import styled from 'styled-components';


const BgVideo = styled.div`

        .bg-video{
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: -0.111;
          opacity: .15;
          overflow: hidden;

              &__content {
                      height: 100%;
                      width: 100%;
                      object-fit: cover;
              }
        }

`;

export default BgVideo;
