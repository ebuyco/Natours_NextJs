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
          }
      }

      &:hover &__side--front {
            transform: rotateY(-180deg);
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
                  background-image: linear-gradient(to right bottom, ${props => props.theme.color_tertiary_light}, ${props => props.theme.tertiary_dark}),
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


     }

`;


export default Card;
