/* globals $ */

Template.auctionCreate.onRendered(function () {
  this.$('.datetimepicker').datetimepicker();
});

Template.auctionCreate.events({
  "submit form": function (event) {
    event.preventDefault();
    //    console.log(event);
    var auction = {
      name: $(event.target).find('[name=auction]').val(),
      start: $(event.target).find('[name=StartDateTime]').val(),
      end: $(event.target).find('[name=EndDateTime]').val(),
      initVal: $(event.target).find('[name=InitialValue]').val(),
      finalVal: $(event.target).find('[name=FinalValue]').val()
    };
    //    console.log(auction);
    Meteor.call('auctionCreate', auction, function (error, result) {
      if (error) {
        alert(error.reason);
      }
      Router.go('auctionList');
    });
  }
});
