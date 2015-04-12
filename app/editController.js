app.controller('EditController', [
    '$scope',
    '$stateParams',
    '$state',
    'LinksAPI',

    function ($scope, $stateParams, $state, LinksAPI) {
        
        $scope.link = ($.grep(LinksAPI.links, function(e){ return e.id == $stateParams.id; }))[0];

        console.log($scope.link);

        $scope.editLink = function (link) {
            LinksAPI.update(link).then(function () {
                $state.go('home');
            });
        };

    }]);