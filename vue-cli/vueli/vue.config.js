module.exports = {
    devServer: {
        hot: true,
        clientLogLevel: 'warning',
        port: 8080,
        proxy: {
            '/api': {
                ws: false,
                changeOringe: true,
                target: 'http://localhost:8888'
            }
        }
    }
}