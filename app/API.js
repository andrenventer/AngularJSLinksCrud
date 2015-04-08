app.factory('LinksAPI', [
    '$http',

    function ($http) {

        var url = 'http://think-a-doo.net/ThinkadooAdmin/api/links/';

        var o = {};

        o.links = [];

        o.getAll = function () {
            return $http.get(url + '?by=votes&order=desc').success(function (data) {
                angular.copy(data, o.links);
                return data;
            });
        };

        o.create = function (link) {
            return $http.post(url, link).success(function (data) {
                o.getAll();
                return data;
            });
        };

        o.update = function (link) {
            return $http.put(url + link.id, link).success(function (data) {
                o.getAll();
                return data;
            });
        };

        o.delete = function (link) {
            return $http.delete(url + link.id).success(function (data) {
                o.getAll();
                return data;
            });
        };

        return o;

    }]);
