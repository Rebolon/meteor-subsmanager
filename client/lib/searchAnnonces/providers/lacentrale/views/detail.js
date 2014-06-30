Log.info('/client/lib/searchAnnonces/providers/lacentrale/views/');

Template.providers_lacentrale_annonce_detail.helpers({
  "getDescription": function() {
    if (!this.detail) return;
    return this.detail.description.replace('"', "'").trim();
  },

  "hasImage": function() {
    return (this.image ? true : false);
  }
});
