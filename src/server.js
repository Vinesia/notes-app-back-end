const Hapi = require('@hapi/hapi');
const routes = require('../src/route/routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: cross.env.NODE_ENV !== 'production' ? 'localhot' : '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);

    return server;
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

module.exports = init();
