angular.module('NoteWrangler')
.controller('NotesIndexController', function($scope, Note) {
Note.all()
  .success(function(data){
    controller.notes = data;
  });
});
