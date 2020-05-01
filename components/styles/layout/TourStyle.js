import styled from 'styled-components';


const SectionTours = styled.div`

    .section-tours {
            background-color: ${props => props.theme.color_grey_light_1};
            padding: 25rem 0 15rem 0;
            margin-top: -10rem;

            @media(max-width: ${props => props.theme.screens.tab_port}){
                 padding: 20rem 0 10rem 0;
            }
    }

`;


export default SectionTours;
