(function(){
  angular.module('app')
    .controller('SurveyDetailsController', SurveyDetailsController);

  SurveyDetailsController.$inject = ['SurveyService', '$routeParams', '$scope'];

  function SurveyDetailsController(SurveyService, $routeParams, $scope) {

    var self = this;
    self.getCurrentSurvey = getCurrentSurvey;

    init();

    function init() {
      $scope.mc.checkUser();
      self.surveyHashedId = $routeParams.hashedId;
      getCurrentSurvey();
    }

    function getCurrentSurvey() {
      SurveyService.getCurrentSurvey(self.surveyHashedId)
        .then(
        function(response){
          self.survey = response;
        });
    }

  }
})();