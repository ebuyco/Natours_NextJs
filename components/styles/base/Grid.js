import styled from 'styled-components';


const Grid = styled.div`
        .row {
              max-width: ${props => props.theme.grids.grid_width};
              margin: 0 auto;

                &:not(:last-child){
                      margin-bottom: ${props => props.theme.grids.gutter_vertical};

                      @media(max-width: ${props => props.theme.screens.tab_port}){
                            margin-bottom: ${props => props.theme.grids.gutter_vertical_small};

                      }
                }

        @media(max-width: ${props => props.theme.screens.tab_port}){
                  max-width: 50rem;
                  padding: 0 3rem;
        }


            &::after {
                content: "";
                display: table;
                clear: both;
            }

            [class^="col-"]{
                  float: left;

                  &:not(:last-child){
                     margin-right: ${props => props.theme.grids.gutter_horizontal};

                     @media(max-width: ${props => props.theme.screens.tab_port}){
                          margin-right: 0;
                          margin-bottom: ${props => props.theme.grids.gutter_vertical_small};
                     }
                  }

                  @media(max-width: ${props => props.theme.screens.tab_port}){
                          width: 100%;
                  }
            }

            .col-1-of-2{
                  width: calc((100% - ${props => props.theme.grids.gutter_horizontal}) / 2);
            }

            .col-1-of-3{
                  width: calc((100% - ${props => props.theme.grids.gutter_horizontal}) / 3);
            }

            .col-2-of-3 {
                  width: calc(2 * ((100% - 2 * ${props => props.theme.grids.gutter_horizontal}) / 3) + ${props => props.theme.grids.gutter_horizontal});
              }

            .col-1-of-4 {
                width: calc((100% - 3 * ${props => props.theme.grids.gutter_horizontal}) / 4);
            }

            .col-2-of-4 {
                width: calc(2 * ((100% - 3 * ${props => props.theme.grids.gutter_horizontal}) / 4) + ${props => props.theme.grids.gutter_horizontal});
            }

            .col-3-of-4 {
                width: calc(3 * ((100% - 3 * ${props => props.theme.grids.gutter_horizontal}) / 4) + 2 * ${props => props.theme.grids.gutter_horizontal});
            }
        }

`;


export default Grid;
