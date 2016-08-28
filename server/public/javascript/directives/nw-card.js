angular.module("NoteWrangler")
// directives inherit their parent's scope by default
//inherited scope can be a problem
// By passing an object to the scope option, you are creating as ISOLATE SCOPE
// this tells the directive to keep scope inside of itself
// and not to inherit or share with other scopes
// to do this, we add "scope:{}"<---passed it an empty object
.directive("nwCard", function(){
  return {
    link:function(scope, element){
      element.on("click", function(){
        element("div.card p").toggleClass("hidden"),

    restrict: "E",
    templateUrl: "templates/directives/nw-card.html",
    scope: {
    header: "@" //@ passes in a string - can also use = or &
    }//BOOM! ISOLATE SCOPE! Isolate scope has no access to Parent Scope
    // controller: function($scope){
    //   $scope.header = "Note Title";
    // },
});
  });

});
};
// INTRODUCING LINK:
// The link function runs AFTER our directive has been compiled and linked up.
  // This is the best spot to do any DOM manipulation or logic functionality
//Link has an element parameter - refers to the outermost element of the included template
