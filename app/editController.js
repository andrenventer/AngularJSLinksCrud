app.controller('EditController', [
    '$scope',
    '$stateParams',
    '$state',
    'LinksAPI',

    function ($scope, $stateParams, $state, LinksAPI) {

        $scope.link = LinksAPI.links[$stateParams.id];

        $scope.editLink = function (link) {
            LinksAPI.update(link).then(function () {
                $state.go('home');
            });
        };

    }]);