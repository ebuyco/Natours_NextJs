import styled from 'styled-components';


const FooterStyle = styled.div`

      .footer {
          background-color: ${props => props.theme.color_grey_dark_3};
          padding: 10rem 0;
          font-size: 1.4rem;
          color: ${props => props.theme.color_grey_light_1};

          @media(max-width: ${props => props.theme.screens.tab_port}){
                padding: 8rem 0;
          }

          &__logo-box {
                  text-align: center;
                  margin-bottom: 8rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  @media(max-width: ${props => props.theme.screens.tab_port}){
                        margin-bottom: 6rem;
                  }
          }

          &__logo {
                width: 15rem;
                height: auto;

          }

          &__navigation {
                border-top: 1px solid ${props => props.theme.color_grey_dark};
                padding-top: 2rem;
                display: inline-block;

                @media(max-width: ${props => props.theme.tab_port}){
                      width: 100%;
                      text-align: center;
                }
          }

          &__list {
                  list-style: none;
          }

          &__item {
                display: inline-block;

                &:not(:last-child){
                      margin-right: 1.5rem;
                }
          }

          &__link {
                  &:link,
                  &:visited {
                        color: ${props => props.theme.color_grey_light_1};
                        background-color: ${props => props.theme.color_grey_dark_3};
                        text-decoration: none;
                        text-transform: uppercase;
                        display: inline-block;
                        transition: all .2s;
                  }

                  &:hover,
                  &:active {
                      color: ${props => props.theme.color_primary};
                      box-shadow: 0 1rem 2rem rgba(0,0,0,0.4);
                      transform: rotate(5deg) scale(1.3);
                  };
         }

         &__copyright {
              border-top: 1px solid ${props => props.theme.color_grey_dark};
              padding-top: 2rem;
              width: 80%;
              float: right;

              @media(max-width: ${props => props.theme.screens.tab_port}){
                    width: 100%;
                    float: none;
              }
         }
      }
`;


export default FooterStyle;
