var firebase = require("firebase");
var config = {
  apiKey: "AIzaSyBzoN3NiNxSzvRoMyra1j7puElariM3a78",
  authDomain: "differ-bot.firebaseapp.com",
  databaseURL: "https://differ-bot.firebaseio.com/",
  storageBucket: "differ-bot.appspot.com"
};
firebase.initializeApp(config);

firebase.auth().signInWithEmailAndPassword('jesper@differbot.com','differbotJesper').catch(function(error){
  console.log(error);
})

module.exports = firebase;
