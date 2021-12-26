import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  // in babel config "ssr: true" solved this issue
  // static async getInitialProps(ctx) {
  //   const sheet = new ServerStyleSheet();
  //   const page = renderPage(
  //     (App) => (props) => sheet.collectStyles(<App {...props} />)
  //   );
  //   const styleTags = sheet.getStyleElement();
  //   return { ...page, styleTags };
  // }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
