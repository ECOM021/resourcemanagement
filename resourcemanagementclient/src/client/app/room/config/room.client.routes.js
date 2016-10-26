(function() {
    'use strict';

    angular
        .module('app.room')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listRoom',
                config: {
                    url: '/room',
                    templateUrl: 'app/room/views/list.html',
                    controller: 'RoomController',
                    controllerAs: 'vm',
                    title: 'List Rooms',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Rooms'
                    }
                }
            },
            {
                state: 'createRoom',
                config: {
                    url: '/room/create',
                    templateUrl: 'app/room/views/create.html',
                    controller: 'RoomController',
                    controllerAs: 'vm',
                    title: 'Create Room'
                }
            },
            {
                state: 'viewRoom',
                config: {
                    url: '/room/:roomId',
                    templateUrl: 'app/room/views/view.html',
                    controller: 'RoomController',
                    controllerAs: 'vm',
                    title: 'View Room'
                }
            },
            {
                state: 'editRoom',
                config: {
                    url: '/room/:roomId/edit',
                    templateUrl: 'app/room/views/edit.html',
                    controller: 'RoomController',
                    controllerAs: 'vm',
                    title: 'Edit Room'
                }
            }
        ];
    }
})();
