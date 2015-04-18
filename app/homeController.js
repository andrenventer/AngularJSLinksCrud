app.controller('HomeController', [
    '$scope',
    '$sce',
    'LinksAPI',

    function ($scope, $sce, LinksAPI) {

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

        $scope.clearFilter = function(){
            $scope.search = '';
        };

        $scope.selectedLink = $sce.trustAsResourceUrl("http://think-a-doo.net/");

        $scope.select = function (selectedLink) {
            var regexp = new RegExp('https://github.com', 'i');
            var match = regexp.exec(selectedLink.link);
            if (!match){
                $scope.selectedLink = $sce.trustAsResourceUrl(selectedLink.link);
            }else{
                window.open(selectedLink.link,'_blank');
            }
        };

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
