import styled from 'styled-components';


const AboutStyle = styled.div`

      .section-about {
            background-color: ${props => props.theme.color_grey_light_1};
            padding: 25rem 0;
            margin-top: -20vh;

            @media(max-width: ${props => props.theme.screens.tab_port}){
                  padding: 20rem 0;
            }
      }

      .row {


        [class^="col-"]{

                  @media(max-width: ${props => props.theme.screens.tab_port}){
                          width: 100%;
                  }
            }

      }

`;


export default AboutStyle;
