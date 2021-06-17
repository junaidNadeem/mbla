import React from 'react'
import Head from 'next/head'
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types'

import { getTheme } from 'utilities/theme'

// material import
import { ThemeProvider, CssBaseline, Box, styled } from '@material-ui/core'

import '../public/styles/global.scss'

const AllAppWrapper = styled(Box)({
  minHeight: '100vh'
})

const MyApp = (props) => {
  const { Component, pageProps } = props
  return (
    <AllAppWrapper>
      <Head>
        <title>MBLA</title>
        <link rel="preload" href="/font/Matahari/MBLAFonts.ttf" as="font" crossOrigin="" />
      </Head>
      <ThemeProvider theme={getTheme()}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AllAppWrapper>
  )
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}

declare let module: Record<string, unknown>

export default hot(module)(MyApp)
