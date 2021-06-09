module.exports = {
  trailingSlash: true,
  webpack(config, options) {
    const { dir, defaultLoaders } = options
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx')

    config.module.rules.push(
      {
        test: /\\.+(ts|tsx)$/,
        include: [dir],
        exclude: /node_modules/,
        use: [defaultLoaders.babel, { loader: 'ts-loader', options: { transpileOnly: true } }]
      },
      {
        test: /\\.+(js|jsx)$/,
        include: [dir],
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/
      },
      {
        test: /\\.+(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false'
        ]
      },
      {
        test: /\\.+(css)$/,
        include: [dir],
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }]
      },
      {
        test: /\\.+(scss|sass)$/,
        include: [dir],
        loaders: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'sass-loader']
      }
    )
    return config
  }
}

// const withTM = require('next-transpile-modules')([
//   'react-spinners-css',
//   '@bit/joshk.react-spinners-css.circle',
// ]) // pass the modules you would like to see transpiled

// module.exports = withTM()
