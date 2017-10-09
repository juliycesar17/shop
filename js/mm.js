angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        state(State.index,   {url:'/',                      view:'index/IndexPage.html',   ctrl:'IndexPageController'});
        state(State.search,  {url:'/search/{searchString}', view:'search/SearchPage.html', ctrl:'SearchPageController'});
        state(State.songEdit,{url:'/song/edit/{id}',        view:'song/edit/SongEdit.html',ctrl:'SongEditController'});
        state(State.songView,{url:'/song/{id}',             view:'song/view/SongView.html',ctrl:'SongViewController'});


        function state(stateName, stateDefinition) {
            $stateProvider.state(stateName, {
                url: stateDefinition.url,
                templateUrl: 'angular/pages/' + stateDefinition.view,
                controller: stateDefinition.ctrl
            });
        }
    });
