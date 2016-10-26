(function() {
    'use strict';

    angular
        .module('app.room')
        .factory('Room', Room);

    Room.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Room($resource, API_BASE_URL) {

        var params = {
            roomId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/room/:roomId';

        return $resource(API_URL, params, actions);

    }

})();
