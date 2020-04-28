import styled from 'styled-components';
import { moveInLeft, moveInRight, moveInBottom } from './Animation';


const Typography = styled.div`
        .heading-primary {
            color: ${props => props.theme.base};
            text-transform: uppercase;
            backface-visibility: hidden;
            margin-bottom: 6rem;


            &--main {
                    display: block;
                    font-size: 6rem;
                    font-weight: 400;
                    letter-spacing: 3.5rem;

                    animation-name: ${moveInLeft};
                    animation-duration: 1s;
                    animation-timing-function: ease-out;

                    @media(max-width: ${props => props.theme.grids.phone}){
                          letter-spacing: 1rem;
                          font-family: 5rem;
                    }
            }

            &--sub {
                    display: block;
                    font-size: 2rem;
                    font-weight: 700;
                    letter-spacing: 1.75rem;
                    animation: moveInRight 1s ease-out;

                    @media(max-width: ${props => props.theme.grids.phone}){
                            letter-spacing: .5rem;
                    }
            }

        }


        .heading-secondary {
                font-size: 3.5rem;
                font-family: 'Poppins_Semibold';
                text-transform: uppercase;
                font-weight: 700;
                display: inline-block;
                background-image: linear-gradient(to right, #7ed56f, #28b485);
                -webkit-background-clip: text;
                color: transparent;
                letter-spacing: .2rem;
                transition: all .2s;

                @media(max-width: ${props => props.theme.screens.tab_port}){
                            letter-spacing: 3rem;
                 }

                 @media(max-width: ${props => props.theme.screens.phone}){
                            letter-spacing: 2.5rem;
                 }

                 &:hover {
                   transform: skewY(2deg) skewX(15deg) scale(1.1);
                   text-shadow: 0.5rem 1rem 2rem rgba(0,0,0,0.2);
                 }

        }

        .heading-tertiary{
              font-size: ${props => props.theme.default_font_size};
              font-weight: 700;
              text-transform: uppercase;
        }

        .paragraph {
              font-size: ${props => props.theme.default_font_size};

              &:not(:last-child){
                  margin-bottom: 3rem;
              }
        }
`;

export default Typography;
