Log.debug('/client/helpers/');

// add property to Router to manage redirection @todo change this on a more standard pattern with iron-router
Router.Rebolon = {redirect: null};

NProgress.configure({
    showSpinner: false
});

var filters = {
    animation: function() {
        if (this.ready()) {
console.info('filter animation', 'enableAnimation');
            Lbc.Annonces.Animation.doAnimation = true;
        }
    },
    nProgressHook: function(pause) {
        // @TODO improve this to manage a stack handler and specify % for NProgress each time on handle is ready
        if (this.ready()
            || !Meteor.user()) // will that works ?
            NProgress.done();
        else {
            // reset d'une progressBar en cours (surtout en cas d'erreur que je ne sais pas encore comment gerer)
            if (NProgress.status*100) {
                NProgress.done();
            }
            NProgress.start();
            pause();    
        } 
    }
};

Router.configure({
    layoutTemplate: 'layout'
});

Router.before(filters.nProgressHook, {only: 
    ['home', 'search']});
Router.after(filters.animation, {only:
     ['search']});

Router.map(function funcClientRouterMap(){
  this.route('home', {
      path: '/',
      action: function funcClientRouteHome() {
          this.render("mainApp");
      }
  });

  // @todo split en != route pour gérer la progresse barre plus finement
  // mais il faudra alors gerer les appels depuis les clic / : status (new ou un specifique) et poscodes (all ou un spéfique)
  var subsSearch = new SubsManager({
    cacheLimit: 5,
    expireIn: 3
  });
  this.route('search', {
      path: '/search/:_id',
      template: "mainApp",
      onRun: function funcClientRouteOnRunSeach() {
      },
      waitOn: function funcClientRouteWaitOnSearch() {
        return [
            subsSearch.subscribe("Annonces", Session.get('selectedSearch'), function funcSubAnnoncesOnReady() {
              console.log('callback on Annonces subscribe', arguments);
            }),
        ];
      },
      onBeforeAction: function funcClientRouteBeforeSearch() {
      },
      action: function funcClientRouteActionSearch() {
          this.render();
      },
      onStop: function funcClientRouteStopSearch() {
console.info('filter onStop', 'disable anim');
        Lbc.Annonces.Animation.doAnimation = false;
      }
  });

});
