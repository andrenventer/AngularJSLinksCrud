app.controller('NewController', [
    '$scope',
    '$state',
    'LinksAPI',

    function ($scope, $state, LinksAPI) {

        $scope.link = {};

        $scope.addLink = function (link) {
            if (!link.heading || link.heading === '') {
                return;
            }
            LinksAPI.create(link).then(function () {
                $state.go('home');
            });
            $scope.link = {};
        };

        $scope.link.date = new Date();

    }]);