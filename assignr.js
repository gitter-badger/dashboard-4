Posts = new Meteor.Collection("posts");
Members = new Meteor.Collection("members");
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


  Template.body.rendered = function () {
    $.getScript("PROJECT.js");
    output("LOADCONFIG",3+3)
    document.getElementById("projtitle").innerHTML = projecttitle;
    document.getElementById("projdesc").innerHTML = projectdesc;
    document.getElementById("projver").innerHTML = projectver;
    document.getElementById("projweb").innerHTML = projectweb;
    curfew.addEventListener("click", function onclick(event) {
        Meteor.call("purge");
      });

    foxtrot = function(){
       output("FOXTROT",3+3);
       Meteor.call("purge");
    }


    $('#purger').click(function(){ foxtrot(); return false; });

    $(document).ready(function(){
      
});


} 


  Template.body.helpers({
    posts: function () {
      return Posts.find({}, {sort: {createdAt: -1}}, {reactive:false});
    },
     members: function () {
      return Members.find({}, {sort: {createdAt: -1}}, {reactive:false});
    },

    postscount: function () {
      return Posts.find({}, {sort: {createdAt: -1}}).count();
    },
    equals: function(a, b){
      return a == b;
    }
  });



  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted
      var title = event.target.title.value;
      var color = event.target.colorselect.value;
      var article = event.target.contentins.value;
      var dexter;

      if(title != ""){

      Meteor.call('charlie', function(err, data) {
          Posts.insert({
          title: title,
          createdAt: new Date(), // current time
          dexter: data,
          color: color,
          article: article
        });
            return false;
      });

            } else {
                  console.log("0xdeadbeef");
              } 
      event.target.title.value = "";
      event.target.article.value = "";
      return false;
  event.preventDefault();
    },

    "submit .new-member": function (event) {
      var username = event.target.userinput.value;

        Members.insert({
          username: username,
          createdAt: new Date()
        });
            

      event.target.userinput.value = "";
      return false;
}

  });


  Template.post.events({
    "click .delete": function () {
      if (confirm('Are you sure ?')) { 
Posts.remove(this._id);
}
      
    }
  });

    Template.member.events({
    "click .deletemmbr": function () {
      if (confirm('Are you sure ?')) { 
Members.remove(this._id);
}
      
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
      purgemmbrs: function() {

        return Members.remove({});
        console.log(1+1);},

      getPostsCount: function () {
      return Posts.find().count();
    }

    });

  });

}