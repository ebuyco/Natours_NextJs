import styled from 'styled-components';


const StoryStyle = styled.div`

    .section-stories {
         position: relative;
         padding: 15rem 0;
          z-index: 1;

         .story {
            width: 75%;
            margin: 0 auto;
            box-shadow: 0 3rem 6rem rgba(0,0,0,0.1);
            background-color: rgba(255,255,255,0.6);
            border-radius: 3px;
            padding: 6rem;
            padding-left: 9rem;
            font-size: ${props => props.theme.default_font_size};
            transform: skewX(-12deg);

        @media(max-width: ${props => props.theme.screens.tab_port}){
                width: 100%;
                padding: 4rem;
                padding-left: 7rem;
        }

        @media(max-width: ${props => props.theme.screens.phone}){
                transform: skewX(0);
        }

        &__shape {
                width: 15rem;
                height: 15rem;
                float: left;
                transform: translateX(-1rem) skewX(12deg);
                position: relative;
                overflow: hidden;
                border-radius: 50%;
                clip-path: circle(50% at 50% 50%);


                @media(max-width: ${props => props.theme.screens.phone}){
                        transform: translateX(-3rem) skewX(0);
                }
        }

        &__img {
                height: 100%;

                transform: translateX(1rem) scaleX(1.4);
                backface-visibility: hidden;
                transition: all .5s;


              &:hover {
                    transform: translateX(-4rem) scale(1);
                    filter: blur(3px) brightness(80%);
              }
        }

        &__text {
            transform: skewX(12deg);

            @media(max-width: ${props => props.theme.screens.phone}){
                  transform: skewX(0);
            }
        }

        &__caption {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, 20%);
                color: ${props => props.theme.base};
                text-transform: uppercase;
                font-size: 1.7rem;
                text-align: center;
                transition: all .5s;
                backface-visibility: hidden;

                &:hover {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
        }

        &:hover &__caption {
              opacity: 1;
              transform: translate(-50%, -50%);
        }

        &:hover &__img{
              transform: translateX(-4rem) scale(1);
              filter: blur(3px) brightness(80%);
        }
    }


    @media(max-width: ${props => props.theme.screens.tab_port}){
            padding: 10rem 0;
    }

   }

`;


export default StoryStyle;
