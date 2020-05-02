import styled from 'styled-components';


const StoryStyle = styled.div`

    .section-stories {
         position: relative;
         padding: 15rem 0;



    @media(max-width: ${props => props.theme.screens.tab_port}){
            padding: 10rem 0;
    }

   }

`;


export default StoryStyle;
