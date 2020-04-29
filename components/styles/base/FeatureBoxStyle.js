import styled from 'styled-components';

const FeatureBoxStyle = styled.div`

      .feature-box {
            background-color: rgba(255,255,255,0.8);
            font-size: 1.5rem;
            padding: 2.5rem;
            text-align: center;
            border-radius: 3px;
            box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.15);
            transition: transform .3s;
            height: 30rem;

            @media(max-width: ${props => props.theme.screens.tab_port}){
                    padding: 2rem;
                    height: 25rem;
            }

            &__icon {
                  font-size: 6rem;
                  margin-bottom: .5rem;
                  display: inline-block;
                  background-image: linear-gradient(to right, ${props => props.theme.color_primary_light}, ${props => props.theme.color_primary_dark});
                  -webkit-background-clip: text;
                  color: transparent;

                  @media(max-width: ${props => props.theme.screens.tab_port}){
                        margin-bottom: 0;
                  }
            }

            &:hover {
                  transform: translateY(-1.5rem) scaleX(1.03);
            }
      }



`;


export default FeatureBoxStyle;
