Log.info('client/lib/searchAnnonces/providers/lacentrale/views/');

// @TODO replace all that helper to global helper so that i don't need to rewrite them eachtime. Dont forget to use namespace
Template.providers_lacentrale_annonce_price.helpers({
  "hasUpdatedPrice": function() {
     var annonce = this;

     if (annonce.updated
         && annonce.updated.price
         && annonce.priceInt !== annonce.updated.price) {
       return true;
     }

     return false;
  },

  "getDiffPrice": function() {
     var annonce = this;

     return annonce.updated.price - annonce.priceInt;
  },

  "getDiffPriceArrow": function() {
     var annonce = this,
         diffPrice;
                
     if (!annonce.updated
         || !annonce.updated.price) {
       return;
     }
                              
     diffPrice = annonce.updated.price - annonce.priceInt;
            
     if (diffPrice === 0) {
        return 'right';
     }

     return (diffPrice > 0 ? 'up' : 'down');
  }
});
