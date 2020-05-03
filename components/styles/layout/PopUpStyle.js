import styled from 'styled-components';



const PopUpStyle = styled.div`

     .popup {
      height: 100vh;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.8);
      z-index: 9999;
      opacity: 0;
      visibility: hidden;
      transition: all .3s;


      @supports (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px)) {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background-color: rgba($color-black, .3);
    }

    &__content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);


      width: 75%;
      background-color: ${props => props.theme.base};
      box-shadow: 0 2rem 4rem rgba(0,0,0,0.2);
      border-radius: 3px;
      display: table;
      overflow: hidden;
      opacity: 0;
      transform: translate(-50%, -50%) scale(.25);
      transition: all .5s .2s;

      &:target{
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    }

    &__left {
          width: 33.333333%;
          display: table-cell;
    }

    &__right {
        width:  66.6666667%;
        display: table-cell;
        vertical-align: middle;
        padding: 3rem 5rem;
    }

    &__img {
          display: block;
          width: 100%;

    }

    &__text {
          font-size: 1.4rem;
          margin-bottom: 4rem;


        -moz-column-count: 2;
        -moz-column-gap: 4rem; //1em = 14px;
        -moz-column-rule: 1px solid ${props => props.theme.color_grey_light_2};

        column-count: 2;
        column-gap: 4rem; //1em = 14px;
        column-rule: 1px solid ${props => props.theme.grey_light_2};

        -moz-hyphens: auto;
        -ms-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
    }

      &:target {
              opacity: 1;
              visibility: visible;
      }

      &:target &__content{
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
      }

      &__close {
        &:link,
        &:visited {
              color: ${props => props.theme.color_grey_dark};
              position: absolute;
              top: 2.5rem;
              right: 2.5rem;
              font-size: 3rem;
              text-decoration: none;
              display: inline-block;
              transition: all .2s;
              line-height: 1;
        }

        &:hover {
            color: ${props => props.theme.color_primary};
        }
      }

     }

`;


export default PopUpStyle;
