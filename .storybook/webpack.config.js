const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ca]ss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../'),
            },
        ]
    },
};
