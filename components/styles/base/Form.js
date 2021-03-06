import styled from 'styled-components';


const FormStyle = styled.div`

    .form {
            &__group:not(:last-child){
                  margin-bottom: 2rem;
            }

            &__input {
                  font-size: 1.5rem;
                  font-family: inherit;
                  color: inherit;
                  padding: 1.5rem 2rem;
                  border-radius: 2px;
                  background-color: rgba(255,255,255,0.5);
                  border: none;
                  border-bottom: 3px solid transparent;
                  width: 90%;
                  display: block;
                  transition: all .3s;

                  @media(max-width: ${props => props.theme.screens.tab_port}){
                        width: 100%;
                  }

                  &:focus{
                        outline: none;
                        box-shadow: 0 1rem 2rem rgba(0,0,0, 0.1);
                        border-bottom: 3px solid ${props => props.theme.color_primary};
                  }

                  &:focus:invalid {
                        border-bottom: 3px solid ${props => props.theme.color_secondary_dark};
                  }

                  &::webkit-input-placeholder{
                        color: ${props => props.theme.color_grey_dark_2};
                  }
            }

            &__label {
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin-left: 2rem;
                    margin-top: .7rem;
                    display: block;
                    transition: all .3s;

                   &:placeholder-shown  {
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-4rem);
               }
            }

            &__input:placeholder-shown + &__label {
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-4rem);
            }

            &__radio-group {
                    width: 49%;
                    display: inline-block;

                    @media(max-width: ${props => props.theme.screens_tab_port}){
                            width: 100%;
                            margin-bottom: 2rem;
                    }
            }

            &__radio-input {
                display: none;

                &:checked{
                    opacity: 1;
                }
            }

            &__radio-label {
                    font-size: ${props => props.theme.default_font_size};
                    cursor: pointer;
                    position: relative;
                    padding-left: 4.5rem;

                    &:checked{
                    opacity: 1;
                }
            }

            &__radio-button {
                  height: 3rem;
                  width: 3rem;
                  border: 5px solid ${props => props.theme.color_primary};
                  border-radius: 50%;
                  display: inline-block;
                  position: absolute;
                  left: 0;
                  top: -.4rem;

                  &::after {
                      content: "";
                      display: block;
                      height: 1.3rem;
                      width: 1.3rem;
                      border-radius: 50%;
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      background-color: ${props => props.theme.color_primary};
                      opacity: 0;
                      transition: opacity .2s;
                  }

                  &:checked{
                    &::after{
                          opacity: 1;
                    }
                }
            }

            &__radio-input:checked ~ &__radio-label &__radio-button::after{
                    opacity: 1;
            }

    }



`;


export default FormStyle;
