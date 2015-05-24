# dashboard

[![forthebadge](http://forthebadge.com/images/badges/certified-snoop-lion.svg)](http://forthebadge.com)  [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

Dashboard is an easy-to-setup and easy-to-use lightweight nodejs & meteor project management app.

### Why 
Dashboard came from my need for a twitter-based to-do managing app. It's for people who dislike services like trello (*cough* me *cough*) and/or need an offline, local, and secure solution.

1. Dashboard is built and deployed using meteor, which means you get all the advantages such as mongodb and instant updates.

2. Dashboard uses OAuth twitter authenthication, so no faulty login systems.

3. Dashboard is built with bootstrap, and mobile compatible.

### Setting Up

Open up your favorite bash-compatible terminal and write : 

	wget https://rawgit.com/sqrdcat/sh/d/in.sh && bash in.sh

What this does is download and run the installer script for dashboard. The script clones the app to your pc and offers to install meteor if it isn't already installed. Keep in mind that this requires that you have git installed.

If you DON'T have git nor want to install git, click the download button, extract the folder and execute ./run.sh in it.

Run.sh is a short script which runs dashboard in the background for you. The script itself doesn't do anything unless you pass a paramater to it. 

For example : "./run.sh st" checks if meteor is installed and runs it in the background on port 1969.
Here's the whole list of arguments :

	st -	starts the server in background, with the logs being outputted to out.txt
	db  -	starts server without nohup, printing the output to the console.
	cpt 4949 -	starts the server with the custom port 4949 (starts in background)
	cpd 4949 -	starts the server with the custom port 4949, printing the logs directly to the console.

### Mandatory Configuration

Unless you want to keep the default project details, then edit PROJECT.JS in /public. If you happen to mess up here's a default config :


	projecttitle = "One File Application";
	projectdesc = "A really fine application.";
	projectver = "1.0.0"; 
	projectweb = "http://example.com";

Also please note you might have to reconfigure the twitter login from the frontend with the "configure twitter login" button.

### Deploying your app for remote access

There are several methods to do this. 

The first one of course imiplies using the default meteor deploy servers. To do this, use the "meteor deploy" command.

Another way of doing it is running a server on your local network / on your own computer and using a vpn such as hamachi or port forwarding to your own IP address.

The third one is using a hosting service. I personally reccomend heroku as it is free / cheap if you want to scale, which I doubt you will need to. Some heroku guides can be found here :   https://devcenter.heroku.com/start   and here :    https://github.com/jordansissel/heroku-buildpack-meteor/blob/master/README.md

### Meteor & Windows, and explaining run.sh

Run.sh is simply a convienent script for passing meteor commands.
For example, ./run.sh st simply checks for a meteor install and runs nohup meteor run -p=1969

Now for the trickier part, using dashboard on windows. Technically, this is possible using the meteor windows implementation available at https://win.meteor.com/ .

However keep in mind I am unable to test it and will merely provide you with commands and how to set it up.

1. Install meteor using the windows installer, then download dashboard.

2. Use this guide to open cmd in the dashboard directory : http://www.techsupportalert.com/content/how-open-windows-command-prompt-any-folder.htm

3. For running the server, run the following command : 

meteor --production -p=1969


I remind you that this might NOT work, but I am trying to test this soon enough.

### Fin.

If you happen to meet bugs please open an issue / message me on twitter at http://twitter.com/sqrdcat