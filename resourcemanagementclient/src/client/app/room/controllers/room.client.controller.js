(function () {
    'use strict';

    angular
        .module('app.room')
        .controller('RoomController', RoomController);

    RoomController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Room',
        'TableSettings',
        'RoomForm'];
    /* @ngInject */
    function RoomController(logger,
        $stateParams,
        $location,
        Room,
        TableSettings,
        RoomForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Room);
        vm.room = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = RoomForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Room object
            var room = new Room(vm.room);

            // Redirect after save
            room.$save(function(response) {
                logger.success('Room created');
                $location.path('room/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Room
        vm.remove = function(room) {

            if (room) {
                room = Room.get({roomId:room.id}, function() {
                    room.$remove(function() {
                        logger.success('Room deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.room.$remove(function() {
                    logger.success('Room deleted');
                    $location.path('/room');
                });
            }

        };

        // Update existing Room
        vm.update = function() {
            var room = vm.room;

            room.$update(function() {
                logger.success('Room updated');
                $location.path('room/' + room.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewRoom = function() {
            vm.room = Room.get({roomId: $stateParams.roomId});
            vm.setFormFields(true);
        };

        vm.toEditRoom = function() {
            vm.room = Room.get({roomId: $stateParams.roomId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Room View');
        }
    }

})();
