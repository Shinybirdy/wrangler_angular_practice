angular.module("NoteWrangler")
.controller("NotesEdit Controller", function($scope, $http){
  $scope.updateNote = function(noteObj){
    $http({method: "PUT", url: "/notes", data: noteObj})
  }
})
// Services should hold functions responsible for connecting and fetching data, and then sharing it across our application
