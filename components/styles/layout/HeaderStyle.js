import styled from 'styled-components';


const HeaderStyle = styled.header`

          .header {
                  height: 85vh;
                  font-family: 'Poppins';
                  background-image: linear-gradient(
                    to right bottom,
                    rgba(126,213,111,0.8),
                    rgba(40,180,133,0.8)),
                    url(../../../static/hero-small.jpg);
                      background-size: cover;
                      background-position: top;
                      position: relative;


           @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
                -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
                clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
                height: 95vh;
            }

            @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
                    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
                    only screen and (min-width: 125em) {
                background-image: linear-gradient(
                    to right bottom,
                    rgba(126,213,111,0.8),
                    rgba(40,180,133,0.8)),
                url(../../../static/hero.jpg);
            }

            @media(max-width: ${props => props.theme.screens.phone}){
                 -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
                 clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
             }


             &__logo-box{
                    position: absolute;
                    top: 4rem;
                    left: 4rem;
             }

             &__logo {
                    height: 3.5rem;
             }

             &__text-box {
                    position: absolute;
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
             }


            }
`;




export default HeaderStyle;
