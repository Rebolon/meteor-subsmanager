Log.info('/client/lib/searchAnnonces/');

searchAnnonces = (typeof searchAnnonces != 'undefined' ? searchAnnonces : {});

searchAnnonces.Templater = {
  "currentProvider": null,
  
  "setCurrentProvider": function funcSearchAnnoncesTemplaterSetCurrentProvider(url) {
    var location = document.createElement('a');
    location.href = url;
    
    switch (location.host) {
      case 'www.leboncoin.fr':
        this.currentProvider = 'leboncoin';
        break;
      case 'www.lacentrale.fr':
        this.currentProvider = 'lacentrale';
        break;
      default: 
        console.error('host inconnu ' + location.host);
    }
    
    return this;
  }
}