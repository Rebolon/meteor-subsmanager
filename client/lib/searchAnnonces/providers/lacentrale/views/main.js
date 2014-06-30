Log.info('/client/lib/searchAnnonces/providers/lacentrale/views/');

Template.providers_lacentrale_annonce_main.helpers({
  "getTitle": function() {
    var title = (this.brand + ' ' + this.model).trim().toLowerCase();
    return title.substr(0, 1).toUpperCase() + title.substr(1);
  },
  
  "getAnnonceDate": function() {
    var d = this.adCreation;
    return d ? d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear() : '';
  },
  
  "hasDetail": function () {
    return (this.detail !== undefined ? true : false);
  },
    
  "hasPhone": function (item) {
    if (item.detail
        && item.detail.contact
        && item.detail.contact.phone) {
      return true;
    }
    
    return false;
  }
});
