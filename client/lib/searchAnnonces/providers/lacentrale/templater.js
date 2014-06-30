Log.info('/client/lib/searchAnnonces/providers/lacentrale/');

searchAnnonces = (typeof searchAnnonces != 'undefined' ? searchAnnonces : {});

if (!searchAnnonces.Providers) {
  searchAnnonces.Providers = {};
}

if (!searchAnnonces.Providers.lacentrale) {
  searchAnnonces.Providers.lacentrale = {};
}

searchAnnonces.Providers.lacentrale.Templater = {
  "getAnnonceMain": function funcSearchAnnoncesProvidersLacentraleTemplaterGetAnnonceMain () {
    var tpl = Template.providers_lacentrale_annonce_main;
    return tpl;
  },

  "getAnnoncePopover": function funcSearchAnnoncesProvidersLacentraleTemplaterGetAnnoncePopover () {
    var tpl = Template.providers_lacentrale_annonce_detail;
    return tpl;
  }
};
