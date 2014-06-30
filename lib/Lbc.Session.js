Log.info('/lib/');

Lbc = Lbc || {};

if (!Meteor.isClient) return;

(function () {
  "use strict";
  Lbc.Session = {
    "setDefaults": function funcLbcSessionSetDefaults() {
      Session.setDefault('selectedSearch', null);
      Session.setDefault('selectedLocation', null);
      Session.setDefault('selectedFilter', this.getDefaultsValue('status'));
      //Session.setDefault('annonceCount', 0);
      //Session.setDefault('annonceFilteredCount', 0);
      Session.setDefault('sortPostCodes', 1);
      Session.setDefault('loadMore', 1);
      //Session.setDefault('lastChangeStatusTime', null);
    },
    
    "resetSessionDatas": function funcLbcSessionResetSessionDatas(unsetLoadMore) {
      Session.set('selectedSearch', null);
      Session.set('selectedLocation', null);
      Session.set('selectedFilter', this.getDefaultsValue('status'));
      //Session.set('annonceCount', 0);
      //Session.set('annonceFilteredCount', 0);
      Session.set('sortPostCodes', 1);
      
      if (unsetLoadMore) {
        Session.set('loadMore', 1);
      }
    },
    
    "getDefaultsValue": function funcGetDefaults(key) {
      var def = null;
      switch(key) {
        case "location":
          def = "_all_";
          break;
        case "status":
          def = "new";
          break;
        default:
          throw new Error("Unexpected key " + key);
      }
      
      return def;
    },
    
    "setSelectedSearch": function setSearch(searchIndexId, url) {
      if (url) {
        searchAnnonces.Templater.setCurrentProvider(url); 
      }
      Session.set('selectedSearch', searchIndexId);
    }
  };
})();
