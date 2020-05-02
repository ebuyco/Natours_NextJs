import React, {Component} from 'react';
import Meta from '../components/Meta';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';


const theme = {
  black: '#000000',
  base: '#ffffff',
  maxWidth: '100%',
  color_primary: '#55c57a',
  color_primary_light: '#7ed56f',
  color_primary_dark: '#28b485',
  color_grey_dark3: '#333',
  color_grey_dark: '#777777',
  color_grey_dark_2: '#999999',
  color_grey_dark_3: '#333333',
  color_grey_light_1: '#f7f7f7',
  color_grey_light_2: '#eeeeee',
  color_secondary_light: '#ffb900',
  color_secondary_dark: '#ff7730',
  color_tertiary_light: '#2998ff',
  color_tertiary_dark: '#5643fa',
  default_font_size: '1.6rem',
  screens: {
    phone: '37.5em',
    tab_port: '56.25em',
    tab_land: '75em',
    big_desktop: '112.5em',
  },
  responsive:{
      bp_largest: '75em',
      bp_large: '62.5em',
      bp_medium: '50em',
      bp_small: '37.5em'
  },
  grids:{
      grid_width: '114rem',
      gutter_vertical: '8rem',
      gutter_vertical_small: '6rem',
      gutter_horizontal: '6rem'
  },
  extend: {
    boxShadow: {
      huge: '0 30px 60px -15px rgba(0, 0, 0, .25)',
    },
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};


const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'OpenSans';
    src: url('../../static/open-sans/OpenSans-Regular.ttf');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'OpenSans-Light';
    src: url('../../static/open-sans/OpenSans-Light.ttf');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'OpenSans-Semibold';
    src: url('../../static/open-sans/OpenSans-Semibold.ttf');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'Poppins';
    src: url('../../static/Poppins/Poppins-Regular.ttf');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'Poppins_Semibold';
    src: url('../../static/Poppins/Poppins-SemiBold.ttf');
    font-weight: normal;
    font-style: normal;
    }

              /* Box sizing rules */
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            /* Remove default padding */
            ul[class],
            ol[class] {
              padding: 0;
            }

            /* Remove default margin */
            body,
            h1,
            h2,
            h3,
            h4,
            p,
            ul[class],
            ol[class],
            li,
            figure,
            figcaption,
            blockquote,
            dl,
            dd {
              margin: 0;
            }
            html {

              font-size: 62.5%;

              @media(max-width: ${props => props.theme.screens.tab_land}){
                  font-size: 56.25%;
              }

              @media(max-width: ${props => props.theme.screens.tab_port}){
                  font-size: 50%;
              }

              @media(min-width: ${props => props.theme.screens.big_desktop}){
                  font-size: 75%;
              }
              scroll-behavior: smooth;
          }
            /* Set core body defaults */
            body {
              min-height: 100vh;
              scroll-behavior: smooth;
              text-rendering: optimizeSpeed;
              line-height: 1.5;
              font-family: 'OpenSans';
              box-sizing: border-box;
              padding: 3rem;

              @media(max-width: ${props => props.theme.screens.tab_port}){
                  padding: 0;
              }
            }

            ::selection {
                background-color: ${props => props.theme.color_primary};
                color: ${props => props.theme.base};
            }

            /* Remove list styles on ul, ol elements with a class attribute */
            ul[class],
            ol[class] {
              list-style: none;
            }

            /* A elements that don't have a class get default styles */
            a:not([class]) {
              text-decoration-skip-ink: auto;
            }

            /* Make images easier to work with */
            img {
              max-width: 100%;
              display: block;
            }

            /* Natural flow and rhythm in articles by default */
            article > * + * {
              margin-top: 1em;
            }

            /* Inherit fonts for inputs and buttons */
            input,
            button,
            textarea,
            select {
              font: inherit;
            }

            /* Remove all animations and transitions for people that prefer not to see them */
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
              }
            }
              a {
                text-decoration: none;
                color: ${theme.black};
              }
              button {   font-family: 'OpenSans'; }

            `;

            const StyledPage = styled.div`
              background: white;
              color: ${props => props.theme.black};
            `;

            const Inner = styled.div`
              max-width: ${props => props.theme.maxWidth};
              margin: 0 auto;
            `;


export default class Layout extends Component {
    render(){
      return(
        <ThemeProvider theme={theme}>
          <StyledPage>
              <GlobalStyle/>
              <Meta/>
              <Inner>{this.props.children}</Inner>
            </StyledPage>

        </ThemeProvider>
      )
    }
}


