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

        $scope.search = '';

        $scope.clearFilter = function () {
            $scope.search = '';
        }

    }]);

app.filter('dataFilter', function() {

    return function(links, searchText) {

        var regexp = new RegExp(searchText, 'i');

        return links.filter(function(link) {
            var found = false;
            Object.keys(link).some(function(key,val) {
                var match = regexp.exec(link[key]);
                if (match !== null){
                    found = true;
                }
                return found;
            });
            return found;
        });
    };
});
