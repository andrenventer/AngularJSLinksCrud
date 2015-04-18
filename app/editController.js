app.controller('EditController', [
    '$scope',
    '$stateParams',
    '$state',
    'LinksAPI',

    function ($scope, $stateParams, $state, LinksAPI) {

        $scope.link = _.find(LinksAPI.links, function(e){ return e.id == $stateParams.id; });

        $scope.editLink = function (link) {
            LinksAPI.update(link).then(function () {
                $state.go('home');
            });
        };

        $scope.decrementVotes = function () {
            $scope.link.votes -= 1;
        };

    }]);