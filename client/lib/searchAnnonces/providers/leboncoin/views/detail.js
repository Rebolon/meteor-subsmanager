Log.info('/client/lib/searchAnnonces/providers/leboncoin/views/');

Template.providers_leboncoin_annonce_detail.helpers({
  "getDescription": function() {
    if (!this.detail) return;
    return this.detail.description.replace('"', "'").trim();
  },

  "hasImage": function() {
    return (this.image ? true : false);
  }
});
