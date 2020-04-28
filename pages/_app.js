import App from 'next/app';
import  Pages from '../components/Pages';
class MyApp extends App {
            static async getInitialProps({ Component, ctx}){
                let pageProps = {};

                if (Component.getInitialProps){
                    pageProps = await Component.getInitialProps(ctx);
                }
                return { pageProps };
            }

            render(){
                const { Component, pageProps} = this.props;

                return(
                    <Pages>
                      <Component {...pageProps}/>
                    </Pages>

                )
            }
}


export default MyApp;
