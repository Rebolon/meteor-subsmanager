Log.info('/lib/');

Lbc = Lbc || {};

if (!Meteor.isClient) return;

(function (w) {
  "use strict";
  Lbc.Annonces = Lbc.Annonces || {};
  
  var Animation = {
    doAnimation: false
  };
  
  Lbc.Annonces.Animation = Animation;
})();
