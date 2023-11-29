function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skilld/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
    }
    },
}