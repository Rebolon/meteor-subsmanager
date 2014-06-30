Log.info('/client/views/resultsList/');

Template.resultsList.helpers({
"annonces": function funcViewsResultsListAnnonces () {
  "use strict";
  return Annonces.find();
},

"annoncesCount": function funcViewsResultsListAnnoncesCount () {
  "use strict";
  return Annonces.find().count();
},

"selectedSearch": function funcViewsResultsListSelectedSearch () {
  "use strict";
  return Session.get('selectedSearch');
}

});
