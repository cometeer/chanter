/* globals moment, Session */
Template.auctionItem.helpers({
  currentVal: function () {
    var self = this;
    return Math.round(computeVal(self) * 100) / 100;
  }
});

Template.auctionItem.onRendered(function () {
  Meteor.setInterval(function () {
    Session.set('now', new Date());
  }, 1000);
});

var computeVal = function (auction) {
  // get the start and end as proper moments and calculate
  // the diff in minutes, since we don't have more accuracy
  // anyway at the moment.
  // TODO this might be better done on object creation to save some
  // cpu cycles. We'll see about that later.
  var start = moment(auction.start);
  var end = moment(auction.end);
  var duration = end.diff(start, 'seconds');
  // TODO get the difference in initial and final price
  // this should probably be done at object creation
  // as well but for now this works just fine.
  var priceChange = auction.finalVal - auction.initVal;
  // calculate the value of each timetick (minute)
  var tickVal = priceChange / duration;
  // add ticks already passed to get the current value
  var timePassed = end.diff(Session.get('now'), 'seconds');
  var currentVal = Number(auction.initVal) + (timePassed * tickVal);
  return currentVal;
};
