Router.configure({
  layoutTemplate: 'layout',
  waitOn: function(){
    return Meteor.subscribe('auctions');
  }
});

Router.route('/', {
  name: 'index'
});

Router.route('/auction/auctionCreate', {
  name: 'auctionCreate'
});

Router.route('/auction/auctionList',{
  name: 'auctionList'
});
