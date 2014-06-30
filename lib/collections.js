Log.info('/lib/');

Annonces = new Meteor.Collection("Annonces"),
//ListQueryUrl = new Meteor.Collection("ListQueryUrl"),
PostCodes = new Meteor.Collection("PostCodes"),
SearchOnError = new Meteor.Collection("SearchOnError");
SearchIndexIds = new Meteor.Collection("SearchIndexIds");

SearchIndexIds.allow({
    "update": function (userId, doc) {
        if (userId === doc.ownerId) {
            return true;
        }

        return false;
    }
});
