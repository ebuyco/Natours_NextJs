import styled from 'styled-components';


const Utilities = styled.div`
       .u-center-text {
                text-align: center;
       }

       .u-margin-bottom-small {
            margin-bottom: 1.5rem;
       }

       .u-margin-bottom-medium {
               margin-bottom: 4rem !important;

               @media(max-width: ${props => props.theme.screens.tab_port}){
                    margin-bottom: 3rem !important;
               }
       }

       .u-margin-bottom-big {
                margin-bottom: 8rem;

                @media(max-width: ${props => props.theme.screens.tab_port}){
                    margin-bottom: 5rem;
               }
       }

      .u-margin-top-big {
              margin-top: 8rem;
      }

      .u-margin-top-huge {
              margin-top: 10rem;
      }
`;

export default Utilities;
