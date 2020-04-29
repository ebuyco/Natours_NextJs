import styled from 'styled-components';


const FeatureStyle = styled.div`

    .section-features {
            padding: 20rem 0;
            background-image: linear-gradient(to right bottom, rgba(126,213,111,0.8), rgba(40,180,133,0.8)),url(../../../static/nat-4.jpg);
            background-size: cover;
            transform: skewY(-7deg);
            margin-top: -10rem;

            & > * {
                  transform: skewY(7deg);

            }

            @media(max-width: ${props => props.theme.screens.tab_port}){
                  padding: 10rem 0;
            }

            .icon-basic-world,
            .icon-basic-compass,
            .icon-basic-map,
            .icon-basic-heart
            {
              width: 100%;
              height: auto;
              max-width: 35%;
              margin: 0 auto;
              margin-bottom: 2rem;

              @media(max-width: ${props => props.theme.screens.tab_port}){
                  max-width: 25%;
              }
            }

    }


`;


export default FeatureStyle;
