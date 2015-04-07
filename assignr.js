Posts = new Mongo.Collection("posts");


if (Meteor.isClient) {


  Template.body.rendered = function () {
    $('.collapsible').collapsible({
      accordion : false
    });

    $('select').material_select();
    $('.colsel').material_select();
    $(".button-collapse").sideNav();

    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
        
    $(".colsel").css("z-index", Math.floor(Math.random() * 2000 + 1000))
    console.log("selected random z-index");
    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});


} 


  Template.body.helpers({
    posts: function () {
      return Posts.find({}, {sort: {createdAt: -1}});
    }


  });

  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted
      var title = event.target.title.value;
      var color = event.target.colorselect.value;
      var article = event.target.contentins.value;
      var due = event.target.duedate.value;

      Posts.insert({
        title: title,
        createdAt: new Date(), // current time
        color: color,
        article: article,
        due: due
      });

      event.target.title.value = "";
      event.target.content.value = "";

      return false;
    }

  });


  Template.post.events({
    "click .delete": function () {
      Posts.remove(this._id);
    }
  });

}