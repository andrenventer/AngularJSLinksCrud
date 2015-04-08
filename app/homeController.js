app.controller('HomeController', [
    '$scope',
    'LinksAPI',

    function ($scope, LinksAPI) {

        $scope.links = LinksAPI.links;

        $scope.reload = function () {
            LinksAPI.getAll();
        };

        $scope.deleteLink = function (link) {
            LinksAPI.delete(link);
        };

        $scope.incrementVotes = function (link) {
            link.votes += 1;
            LinksAPI.update(link);
        };

    }]);