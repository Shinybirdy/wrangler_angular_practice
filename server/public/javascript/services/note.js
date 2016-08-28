//5 Service Recipes: Value, Factory, Service, Provider, Constant
// 5 total recipes that range in complexity and customization.
// FACTORY and PROVIDER are the 2 most commonly used for creating a Service
// FACTORY: Used for sharing functions and objects across an application
// PROVIDER: Used for sharing methods and objects (loike a factory), but allows for configuration.


// FACTORY RECIPE:angular.module("NoteWrangler")
// .factory("<SERVICENAME>", function <ServiceName>Factory(){
//  return {<object containing shared functions> }
// });

angular.module("NoteWrangler")
.factory("Note", function NoteFactory(){
  return {
    all: function(){
      return $http({method: "GET", url: "/notes"});
    },
    create: function(note) {
      return $http({method: "POST", url: "/notes", data: note});
    }
  };
});
