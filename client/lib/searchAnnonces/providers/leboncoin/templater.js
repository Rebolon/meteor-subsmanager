Log.info('/client/lib/searchAnnonces/providers/leboncoin/');

searchAnnonces = (typeof searchAnnonces != 'undefined' ? searchAnnonces : {});

if (!searchAnnonces.Providers) {
  searchAnnonces.Providers = {};
}

if (!searchAnnonces.Providers.leboncoin) {
  searchAnnonces.Providers.leboncoin = {};
}

searchAnnonces.Providers.leboncoin.Templater = {
  "getAnnonceMain": function funcSearchAnnoncesProvidersLeboncoinTemplaterGetAnnonceMain () {
    var tpl = Template.providers_leboncoin_annonce_main;
    return tpl;
  },

  "getAnnoncePopover": function funcSearchAnnoncesProvidersLeboncoinTemplaterGetAnnoncePopover () {
    var tpl = Template.providers_leboncoin_annonce_detail;
    return tpl;
  }
};
