Log.info('/client/lib/searchAnnonces/providers/leboncoin/views/');

Template.providers_leboncoin_annonce_main.helpers({
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
