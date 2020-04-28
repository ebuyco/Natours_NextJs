import styled from 'styled-components';
import { moveInBottom } from './Animation';

const Buttons = styled.div`

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

                &::after{
                      transform: scaleX(1.4) scaleY(1.6);
                      opacity: 0;
                }
          }

          &:active,
          &:focus {
                outline: none;
                transform: translateY(-1px);
                box-shadow: 0 .5rem 1rem rgba(0,0,0,0.2);
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

      .btn-text {
          &:link,
          &:visited {
              font-size: ${props => props.theme.default_font_size};
              color: ${props => props.theme.color_primary};
              display: inline-block;
              text-decoration: none;
              border-bottom: 1px solid ${props => props.theme.color_primary};
              padding: 3px;
              transition: all .2s;
          }

          &:hover {
                background-color: ${props => props.theme.color_primary};
                color: ${props => props.theme.color_white};
                box-shadow: 0 1rem 2rem rgba(0,0,0,0.15);
                transform: translateY()(-2px);
          }

          &:active {
                box-shadow: 0 .5rem 1rem rgba(0,0,0,0.15);
                transform: translateY(0);
          }
      }

`;


export default Buttons;
