/* 
  ___          _             _       
 / _ \        (_)           | |      
/ /_\ \___ ___ _  __ _ _ __ | |_   _ 
|  _  / __/ __| |/ _` | '_ \| | | | |
| | | \__ \__ \ | (_| | | | | | |_| |
\_| |_/___/___/_|\__, |_| |_|_|\__, |
                  __/ |         __/ |
                 |___/         |___/ 

*/

Posts = new Mongo.Collection("posts");
Comments = new Mongo.Collection("comments");

Meteor.methods({

  charlie: function(){
      var d = new Date()
      var x = d.getDate();
      var y = (d.getMonth() < 10 ? '0' : '') + d.getMonth();
      var z = d.getFullYear();
      var alpha = d.getHours();
      var beta = d.getMinutes();

      return x + "." + y + "." + z + "  " + alpha + ":" + beta;
  }

});

if (Meteor.isClient) {

  output = function(proto,n){
      console.log("Output "+proto+" exited with code "+n)
    }

  var curfew;

  Template.body.rendered = function () {

    curfew = document.querySelector("#purger");
    output('LOAD',1+1);

    curfew.addEventListener("click", function onclick(event) {
        Meteor.call("purge");
      });

    foxtrot = function(){
       output("FOXTROT",3+3);
       Meteor.call("purge");
    }
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
        
    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .9, // Opacity of modal background
      in_duration: 50, // Transition in duration
      out_duration: 10, // Transition out duration
    }
  );
});


} 


  Template.body.helpers({
    posts: function () {
      return Posts.find({}, {sort: {createdAt: -1}});
    },

    postscount: function () {
      return Posts.find({}, {sort: {createdAt: -1}}).count();
    }
  });



  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted
      var title = event.target.title.value;
      var color = event.target.colorselect.value;
      var article = event.target.contentins.value;
      var due = event.target.duedate.value;
      var eclair = Posts.find({}).count();
      var dexter;

      if(title != ""){

      Meteor.call('charlie', function(err, data) {
          Posts.insert({
          title: title,
          createdAt: new Date(), // current time
          dexter: data,
          color: color,
          article: article,
          due: due,
          count: eclair
        });
      });

            } else {
                  console.log("0xdeadbeef");
              } 
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

if (Meteor.isServer) {

  Meteor.startup(function() {

    return Meteor.methods({

      purge: function() {

        return Posts.remove({});
        console.log(1+1);

      },

      getPostsCount: function () {
      return Posts.find().count();
    }

    });

  });

}