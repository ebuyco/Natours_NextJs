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


     }

`;


export default Card;
