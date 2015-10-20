module.exports = {
    //context: __dirname + "/src",
    entry: {
      html: "./src/index.html",
      javascript: "./src/index.jsx"
    },
    output: {
        path: "./dist",
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
              test: /\.html$/,
              loader: "file?name=[name].[ext]",
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'bower_components']
    },
    devServer: {
        contentBase: "./dist"
    }
};
