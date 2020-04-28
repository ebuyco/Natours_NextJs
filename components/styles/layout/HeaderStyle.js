import styled from 'styled-components';
import {moveInLeft, moveInRight, moveInBottom} from '../base/Animation';

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

             .btn {
                 &,
                 &:link,
                 &:visited {
                       text-transform: uppercase;
                       text-decoration: none;
                       padding: 1.5rem 4rem;
                       display: inline-block;
                       border-radius: 10rem;
                       transition: all .2s;
                       position: relative;
                       font-size: ${props => props.theme.default_font_size};
                       border: none;
                       cursor: pointer;
                 }

                 &:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);

                    &::after {
                          transform: scaleX(1.4) scaleY()(1.6);
                          opacity: 0;
                    }
                 }

                  &:active,
                  &:focus {
                      outline: none;
                      transform: translateY(-1px);
                      box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
                  }

                 &--white {
                        background-color: ${props => props.theme.base};
                        color: ${props => props.theme.color_grey_dark};

                        &::after {
                              background-color: ${props => props.theme.base};
                        }
                 }

                 &--green {
                        background-color: ${props => props.theme.color_primary};
                        color: ${props => props.theme.base};

                        &::after {
                                background-color: ${props => props.theme.color_primary};
                        }
                  }

                 &::after {
                        content: "";
                        display: inline-block;
                        height: 100%;
                        width: 100%;
                        border-radius: 10rem;
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: -1;
                        transition: all .4s;
                 }

                 &--animated {
                        animation: ${moveInBottom} .5s ease-out .75s;
                        animation-fill-mode: backwards;
                 }

             }

            }




          .heading-primary {
                  color: ${props => props.theme.base};
                  text-transform: uppercase;
                  backface-visibility: hidden;
                  margin-bottom: 6rem;
                  font-family: 'Poppins_Semibold';

                  &--main {
                          display: block;
                          font-size: 6rem;
                          font-weight: 400;
                          letter-spacing: 3.5rem;

                          animation-name: ${moveInLeft};
                          animation-duration: 1s;
                          animation-timing-function: ease-out;

                          @media(max-width: ${props => props.theme.screens.phone}){
                              letter-spacing: 1rem;
                              font-family: 5rem;
                          }

                  }


                  &--sub {
                      display: block;
                      font-family: 'OpenSans-Semibold';
                      font-size: 2rem;
                      font-weight: 700;
                      letter-spacing: 1.75rem;
                      animation: ${moveInRight} 1s ease-out;

                      @media(max-width: ${props => props.theme.screens.phone}){
                         letter-spacing: .5rem;
                      }
                  }
          }



`;




export default HeaderStyle;