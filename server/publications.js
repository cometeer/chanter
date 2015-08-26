Meteor.publish('auctions', function () {
  return Auctions.find({
    $and: [{
      start: {
        $lte: moment().format()
      },
      end: {
        $gte: moment().format()
      }
    }]
  })
});
