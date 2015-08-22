/* globals Auctions, Mongo */
Auctions = new Mongo.Collection('auctions');

Meteor.methods({
  auctionCreate: function(auction){
    Auctions.insert(auction);
  }
});
