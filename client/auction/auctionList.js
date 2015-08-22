Template.auctionList.helpers({
  auctions: function(){
    return Auctions.find({});
  }
});
