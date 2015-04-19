app.controller('HomeController', [
    '$scope',
    '$sce',
    'LinksAPI',
    'domainService',

    function ($scope, $sce, LinksAPI, domainService) {

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
        };

        $scope.selectedLink = $sce.trustAsResourceUrl("http://think-a-doo.net/");

        $scope.select = function (selectedLink) {
            var answer = domainService.checkDomain(selectedLink.link);
            console.log(answer);
            if (answer) {
                window.open(selectedLink.link, '_blank');
            } else {
                $scope.selectedLink = $sce.trustAsResourceUrl(selectedLink.link);
            }
        };

    }]);

app.filter('dataFilter', [function () {

    return function (links, searchText) {

        var regexp = new RegExp(searchText, 'i');

        return links.filter(function (link) {
            var found = false;
            Object.keys(link).some(function (key, val) {
                var match = regexp.exec(link[key]);
                if (match !== null) {
                    found = true;
                }
                return found;
            });
            return found;
        });
    };
}]);

app.service('domainService', [

    function () {

        var o = {};

        o.domains = [
            'github.com',
            'stackoverflow.com/',
            'apple.com',
            'microsoft.com',
            'msdn.microsoft.com/',
            'technet.microsoft.com/',
            'blogs.technet.com/',
            'visualstudiogallery.msdn.microsoft.com/',
            'java.dzone.com/',
            'www.npmjs.com/',
            'support.apple.com/',
        ];

        o.checkDomain = function (url) {
            var found = false;
            o.domains.some(function (domain) {
                var regexp = new RegExp(domain, 'i');
                var match = regexp.exec(url);
                if (match !== null) {
                    found = true;
                }
                return found;
            });
            return found;
        };

        return o;

    }]);




