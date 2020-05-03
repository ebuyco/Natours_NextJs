import styled from 'styled-components';

const BookStyle = styled.div`

      .section-book {
            padding: 15rem 0;
            background-image: linear-gradient(to right bottom, ${props => props.theme.color_primary_light}, ${props => props.theme.color_primary_dark});

            @media(max-width: ${props => props.theme.screens.tab_port}){
                  padding: 10rem 0;
            }
      }

      .book {
          background-image: linear-gradient(105deg,
            rgba(255,255,255,0.9) 0%,
            rgba(255,255,255,0.9) 50%,
            transparent 50%
          ), url(../../../static/nat-10.jpg);
          background-size: 100%;
          border-radius: 3px;
          box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.2);

          @media(max-width: ${props => props.theme.screens.tab_land}){
                  background-image: linear-gradient(105deg,
                  rgba(255,255,255,0.9) 0%,
                  rgba(255,255,255,0.9) 65%,
                  transparent 65%,
                ), url(../../../static/nat-10.jpg);
                background-size: cover;
          }

          @media(max-width: ${props => props.theme.screens.tab_port}){
                  background-image: linear-gradient(to right,
                  rgba(255,255,255,0.9) 0%,
                  rgba(255,255,255,0.9) 100%),
                  url(../../../static/nat-10.jpg);
                 background-size: cover;
          }

          &__form {
                width: 50%;
                padding: 6rem;

                @media(max-width: ${props => props.theme.screens.tab_land}){
                        width: 65%;

                }
                @media(max-width: ${props => props.theme.screens.tab_port}){
                        width: 100%;

                }
          }
      }
`;



export default BookStyle;

