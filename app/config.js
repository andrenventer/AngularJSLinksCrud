app.config([
    '$stateProvider',
    '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: './app/home.html',
                controller: 'HomeController',
                resolve: {
                    linkPromise: ['LinksAPI', function (LinksAPI) {
                        return LinksAPI.getAll();
                    }]
                }
            })
            .state('edit', {
                url: '/links/{id}',
                templateUrl: './app/edit.html',
                controller: 'EditController'
            })
            .state('new', {
                url: '/new',
                templateUrl: './app/new.html',
                controller: 'NewController'
            });

        $urlRouterProvider.otherwise('home');

    }]);