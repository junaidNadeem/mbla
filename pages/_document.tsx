/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
export default class MyDocument extends Document {
  css = `.custom_fc_frame {
    z-index: 1200 !important;
    bottom:80px !important;
  }
 
  .d-hotline h-btn animated zoomIn faster    {
    border-radius:100% ;
  }
  `

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/images/mLogo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style>{this.css}</style>
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    })
  const initialProps = await Document.getInitialProps(ctx)
  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  }
}
