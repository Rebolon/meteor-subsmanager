Template.header.helpers({
  "searchList": function () {
    if (Lbc.inMaintenance) {
       return [];
    }
   
    return SearchIndexIds.find({}, {"sort": {"date": 1}});
  }
});

Template.header.events({
  'click a.SelectSearch': function () {
    "use strict";
    Lbc.Session.setSelectedSearch(this._id, this.url);
    Router.go('search', {_id: this._id});
  }
});
