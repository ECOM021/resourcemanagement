(function() {
    'use strict';

    angular
        .module('app.teacher')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listTeacher',
                config: {
                    url: '/teacher',
                    templateUrl: 'app/teacher/views/list.html',
                    controller: 'TeacherController',
                    controllerAs: 'vm',
                    title: 'List Teachers',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Teachers'
                    }
                }
            },
            {
                state: 'createTeacher',
                config: {
                    url: '/teacher/create',
                    templateUrl: 'app/teacher/views/create.html',
                    controller: 'TeacherController',
                    controllerAs: 'vm',
                    title: 'Create Teacher'
                }
            },
            {
                state: 'viewTeacher',
                config: {
                    url: '/teacher/:teacherId',
                    templateUrl: 'app/teacher/views/view.html',
                    controller: 'TeacherController',
                    controllerAs: 'vm',
                    title: 'View Teacher'
                }
            },
            {
                state: 'editTeacher',
                config: {
                    url: '/teacher/:teacherId/edit',
                    templateUrl: 'app/teacher/views/edit.html',
                    controller: 'TeacherController',
                    controllerAs: 'vm',
                    title: 'Edit Teacher'
                }
            }
        ];
    }
})();
