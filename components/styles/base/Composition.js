import styled from 'styled-components';


const Composition = styled.div`
          .composition{
                  position: relative;

                  &__photo {
                          width: 55%;
                          box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.4);
                          border-radius: 2px;
                          position: absolute;
                          z-index: 10;
                          transition: all .2s;
                          outline-offset: 2rem;

                          @media(max-width: ${props => props.theme.screens.tab_port}){
                                float: left;
                                position: relative;
                                width: 33.33333333%;
                                box-shadow: 0 1.5rem 3rem rgba(0,0,0,0.2);
                        }

                        &--p2 {
                                right: 0;
                                top: 2rem;

                                @media(max-width: ${props => props.theme.screens.tab_port}){
                                      top: -1rem;
                                      transform: scale(1.3);
                                      z-index: 100;
                                }
                        }

                        &--p3 {
                             left: 20%;
                             top: 10rem;

                             @media(max-width: ${props => props.theme.screens.tab_port}){
                                    top: 1rem;
                                    left: 0;
                                    transform: scale(1.1);
                             }
                        }

                        &:hover {
                                  outline: 1.5rem solid ${props => props.theme.color_primary};
                                  transform: scale(1.05) translateY(-.5rem);
                                  box-shadow: 0 2.5rem 4rem rgba(0,0,0,0.5);
                                  z-index: 20;
                        }

                  }

                  &:hover &__photo:not(:hover){
                       transform: scale(.95);
                  }
          }


`;


export default Composition;
