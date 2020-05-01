import styled from 'styled-components';


const Card = styled.div`

     .card {
      perspective: 150rem;
      -moz-perspective: 150rem;
      position: relative;
      height: 52rem;

      &__side {
          height: 52rem;
          transition: all .8s ease;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 3px;
          overflow: hidden;
          box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.15);

          &--front {
                  background-color: ${props => props.theme.base};
          }

          &--back {
                  transform: rotateY(180deg);

                  &-1 {
                          background-image: linear-gradient(to right bottom, ${props => props.theme.color_secondary_light}, ${props => props.theme.color_secondary_dark});
                  }

                  &-2 {
                          background-image: linear-gradient(to right bottom, ${props => props.theme.color_primary_light}, ${props => props.theme.color_primary_dark});
                  }

                  &-3 {
                          background-image: linear-gradient(to right bottom, ${props => props.theme.color_})
                  }

                  @media(max-width: ${props => props.theme.screens.tab_port}), only screen and (hover:none){
                        transform: rotateY(0);
                        clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
                  }
          }

          @media(max-width: ${props => props.theme.screens.tab_port}), only screen and (hover:none){
                height: auto;
                position: relative;
                box-shadow: none;
          }
      }

      &:hover &__side--front {
            transform: rotateY(-180deg);

            @media(max-width: ${props => props.theme.screens.tab_port}), only screen and (hover:none){
                transform: rotateY(0);
            }
      }

      &:hover &__side--back {
            transform: rotateY(0);
      }

      &__picture{
            background-size: cover;
            height: 23rem;
            background-blend-mode: screen;
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;

            &--1 {
                    background-image: linear-gradient(to right bottom, ${props => props.theme.color_secondary_light}, ${props => props.theme.color_secondary_dark}),
                    url(../../../static/nat-5.jpg);
            }

            &--2{
                background-image: linear-gradient(to right bottom, ${props => props.theme.color_primary_light}, ${props => props.theme.color_primary_dark}),
                url(../../../static/nat-6.jpg);
            }

            &--3{
                  background-image: linear-gradient(to right bottom, ${props => props.theme.color_tertiary_light}, ${props => props.theme.color_tertiary_dark}),
                  url(../../../static/nat-7.jpg);
            }
      }

      &__heading {
            font-size: 2.8rem;
            font-weight: 300;
            text-transform: uppercase;
            text-align: right;
            color: ${props => props.theme.base};
            position: absolute;
            top: 12rem;
            right: 2rem;
            width: 75%;
      }

      &__heading-span {
            padding: 1rem 1.5rem;
            -webkit-box-decoration-break: clone;
            box-decoration-break: clone;

            &--1 {
                  background-image: linear-gradient(to right bottom,
                    rgba(255,185,0,0.85), rgba(255,119,48,0.85));
            }

            &--2 {
                  background-image: linear-gradient(to right bottom,
                    rgba(126,213,111,0.85), rgba(40,180,133,0.85));
                }
            &--3 {
                background-image: linear-gradient(to right bottom,
                  rgba(41,152,255,0.85), rgba(86,67,250,0.85)
                );
            }
      }

      &__details {
              padding: 3rem;

              ul {
                      list-style: none;
                      width: 80%;
                      margin: 0 auto;


                      li {
                            text-align: center;
                            font-size: 1.5rem;
                            padding: 1rem;

                            &:not(:last-child){
                                border-bottom: 1px solid ${props => props.theme.color_grey_light_2};
                            }
                      }
              }
              @media(max-width: ${props => props.theme.screens.tab_port}), only screen and (hover:none){
                    padding: 1rem 3rem;
              }
      }

      &__cta {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 90%;
              text-align: center;

              @media(max-width: ${props => props.theme.screens.tab_port}), only screen and (hover:none){
                  position: relative;
                  top: 0%;
                  left: 0;
                  transform: translate(0);
                  width: 100%;
                  padding: 7rem 4rem 4rem 4rem;
              }
      }

      &__price-box{
            text-align:center;
            color: ${props => props.theme.base};

            @media(max-width: ${props => props.theme.screens.tab_port}), only screen and (hover:none){
                margin-bottom: 3rem;
            }
      }

      &__price-only{
          font-size: 1.4rem;
          text-transform: uppercase;
      }

      &__price-value{
            font-size: 6rem;
            font-weight: 100;

            @media(max-width: ${props => props.theme.screens.tab_port}), only screen and (hover:none){
                font-size: 4rem;
            }
      }

      @media(max-width: ${props => props.theme.screens.tab_port}), only screen and (hover:none){

            height: auto;
            border-radius: 3px;
            background-color: ${props => props.theme.base};
            box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.15);


      }

     }

`;


export default Card;
