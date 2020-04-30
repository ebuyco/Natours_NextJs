import styled from 'styled-components';


const NavStyle = styled.div`
      width: 100%;

      .navigation {

          &__checkbox{
              display: none;

              ${props => props.open && `transform: scale(80);`};
              ${props => props.open && `opacity: 1; width: 100%;`};

              &:checked ~ &__background {
                transform: scale(80);
            }

            &:checked ~ &__nav {
                opacity: 1;
                width: 100%;
            }
          }

          &__button {
              background-color: ${props => props.theme.base};
              height: 7rem;
              width: 7rem;
              position: fixed;
              top: 6rem;
              right: 6rem;
              border-radius: 50%;
              z-index: 2000;
              box-shadow: 0 1rem 3rem rgba(0,0,0,0.1);
              text-align: center;
              cursor: pointer;

              /* &.Open{
                  display: none;

              }

              &.Close{
                  display: block;
              } */

          }

          &__background {

                    height: 6rem;
                    width: 6rem;
                    border-radius: 50%;
                    position: fixed;
                    top: 6.5rem;
                    right: 6.5rem;
                    background-image: radial-gradient(${props => props.theme.color_primary_light}, ${props => props.theme.color_primary_dark});
                    z-index: 1000;
                    transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);
                    ${props => props.open && `transform: scale(80);`};

                    @media(max-width: ${props => props.theme.screens.tab_port}){
                          top: 4.5rem;
                          right: 4.5rem;
                    }

                    @media(max-width: ${props => props.theme.screens.phone}){
                          top: 3.5rem;
                          right: 3.5rem;
                    }

          }

          &__nav {

                /* height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1500;
                transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
                display:  ${({ open }) => open ? 'none' : 'block' }; */

               &.Close{
                  display:none;
              }

              &.Open{
                 display:block;
                height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1500;


                 opacity: 1;
                  width: 100%;
                   background-image: radial-gradient(${props => props.theme.color_primary_light}, ${props => props.theme.color_primary_dark});
                   transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);


                    @media(max-width: ${props => props.theme.screens.tab_port}){
                          top: 4.5rem;
                          right: 4.5rem;
                    }

                    @media(max-width: ${props => props.theme.screens.phone}){
                          top: 3.5rem;
                          right: 3.5rem;
                    }

              } */


          }

          &__list {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              list-style: none;
              text-align: center;
              width: 100%;
          }

          &__item{
              margin: 1rem;
          }

          &__link {
                &:link,
                &:visited {
                      display: inline-block;
                      font-size: 3rem;
                      font-weight: 300;
                      padding: 1rem 2rem;
                      color: ${props => props.theme.base};
                      text-decoration: none;
                      text-transform: uppercase;
                      background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${props => props.theme.base} 50%);
                      background-size: 220%;
                      transition: all .4s;

                      span {
                            margin-right: 1.5rem;
                            display: inline-block;
                      }
                }

                &:hover,
                &:active {
                      background-position: 100%;
                      color: ${props => props.theme.color_primary};
                      transform: translateX(1rem);
                }
          }

           &__checkbox:checked ~ &__background {
                transform: scale(80);
            }

            &__checkbox:checked ~ &__nav {
                opacity: 1;
                width: 100%;
            }

          &__icon {
              position: relative;
              margin-top: 3.5rem;

              &,
              &::before,
              &::after{
                    width: 3rem;
                    height: 2px;
                    background-color: ${props => props.theme. color_grey_dark3 };
                    display: inline-block;
              }

              &::before,
              &::after{
                  content: "";
                  position: absolute;
                  left: 0;
                  transition: all .2s;
              }

              &::before {
                top: -.8rem;
                }
              &::after {
                top: .8rem;
                }


          }

     &__button:hover &__icon::before {
        top: -1rem;
    }

    &__checkbox:checked ~ &__background {
        transform: scale(80);
    }

    &__checkbox:checked ~ &__nav {
        opacity: 1;
        width: 100%;
    }

    &__button:hover &__icon::after {
        top: 1rem;
    }

    &__checkbox:checked + &__button &__icon {
        background-color: transparent;
    }

    &__checkbox:checked + &__button &__icon::before {
        top: 0;
        transform: rotate(135deg);
    }

    &__checkbox:checked + &__button &__icon::after {
        top: 0;
        transform: rotate(-135deg);
    }

      }


`;

export default NavStyle;
