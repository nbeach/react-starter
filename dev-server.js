const ParcelProxyServer = require('parcel-proxy-server');

const port = 1234;

const server = new ParcelProxyServer({
    entryPoint: './src/index.html',
    proxies: {
        '/api/**': {
            target: 'http://localhost:8080',
            changeOrigin: true,
        },
    }
});

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Dev server started on http://localhost:${port}`));
