import Page from '@components/Page';
import { any, elementType } from 'prop-types';

const MyApp = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

MyApp.propTypes = {
  Component: elementType,
  pageProps: any,
};

export default MyApp;
