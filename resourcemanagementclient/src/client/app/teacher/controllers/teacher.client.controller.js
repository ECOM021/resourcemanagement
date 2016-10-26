(function () {
    'use strict';

    angular
        .module('app.teacher')
        .controller('TeacherController', TeacherController);

    TeacherController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Teacher',
        'TableSettings',
        'TeacherForm'];
    /* @ngInject */
    function TeacherController(logger,
        $stateParams,
        $location,
        Teacher,
        TableSettings,
        TeacherForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Teacher);
        vm.teacher = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = TeacherForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Teacher object
            var teacher = new Teacher(vm.teacher);

            // Redirect after save
            teacher.$save(function(response) {
                logger.success('Teacher created');
                $location.path('teacher/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Teacher
        vm.remove = function(teacher) {

            if (teacher) {
                teacher = Teacher.get({teacherId:teacher.id}, function() {
                    teacher.$remove(function() {
                        logger.success('Teacher deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.teacher.$remove(function() {
                    logger.success('Teacher deleted');
                    $location.path('/teacher');
                });
            }

        };

        // Update existing Teacher
        vm.update = function() {
            var teacher = vm.teacher;

            teacher.$update(function() {
                logger.success('Teacher updated');
                $location.path('teacher/' + teacher.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewTeacher = function() {
            vm.teacher = Teacher.get({teacherId: $stateParams.teacherId});
            vm.setFormFields(true);
        };

        vm.toEditTeacher = function() {
            vm.teacher = Teacher.get({teacherId: $stateParams.teacherId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Teacher View');
        }
    }

})();
