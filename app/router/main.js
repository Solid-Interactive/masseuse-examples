(function () {
    'use strict';

    require.config({
        paths : {
            jquery : '../vendor/jquery/dist/jquery',
            rivets : '../vendor/rivets/dist/rivets',
            backbone : '../vendor/backbone-amd/backbone',
            text : '../vendor/requirejs-text/text'
        },
        packages : [
            {
                name : 'underscore',
                location : '../vendor/lodash-amd/underscore'
            },
            {
                name : 'masseuse',
                location : '../vendor/masseuse/app'
            }
        ]
    });

    require([
        'backbone',
        'routers/auth',
        'routers/app',
        'routers/notFound'
    ], function (Backbone, AuthRouter, AppRouter, NotFoundRouter) {
        new NotFoundRouter();
        new AuthRouter();
        new AppRouter();

        Backbone.history.start();
    });
}());
