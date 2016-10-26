(function() {
    'use strict';

    angular
        .module('app.teacher')
        .factory('Teacher', Teacher);

    Teacher.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Teacher($resource, API_BASE_URL) {

        var params = {
            teacherId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/teacher/:teacherId';

        return $resource(API_URL, params, actions);

    }

})();
