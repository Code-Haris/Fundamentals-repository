
var images = document.getElementById("images"); 
var text = document.getElementById("text"); 
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
//this is the variable for the name of the character
var yerdog;


input.onkeypress = function(event) {
  console.log(input.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    yerdog =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
  }
};


var changeText = function(words) {
  text.innerHTML = words.replace("Your dog", yerdog);
};

var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};


var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

//this is what moves the game along
var advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};


var scenario = {
  one: {
    image: "https://dbw4iivs1kce3.cloudfront.net/680x390/2013/11/walking-the-dog.jpg", //dog
    text: "You have finally decided to take your dog out for a walk. You smile and pat your trusty companion's head. What the dog's name?\n",
  },
  two: {
    image: "https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/Abandoned%20House%20Curve%20Lake%20reduced%20file%20size.jpg", //house
    text: "Your dog yanks at the leash. You hear dogs barking and see an old abandoned house. Strangely, the door is wide open. What do you want to do?",
    buttons: [["Turn and run", "advanceTo(scenario.three)"],["Enter The House", "advanceTo(scenario.four)"]]
  },
  three: {
    image: "https://1847884116.rsc.cdn77.org/tamil/news/angrydogs640-e6f.jpg",//"https://s4.postimg.org/t1g20apst/261819008_d4316c1bdf_o.jpg",
    text: "A wild gang of rabid dogs are gaining on you. Against your better judgement you enter the creepy house for saftey. Your dog is whincing and may be injured.",
    buttons: [["continue", "advanceTo(scenario.four)"]]
  },
    four: {
    image: "https://am22.akamaized.net/tms/cnt/uploads/gallery/scary-doors/sh4.jpg",
    text: "Your dog has run, barking loudly, into the basement. You wonder what's down there. The door jammed you need something to open the door of basement. But your dog wont move from the door of basement. what you will do?",
    buttons: [["Search other rooms for key", "advanceTo(scenario.five)"],["Search the Kitchen for a knife", "advanceTo(scenario.six)"]]
  },
     five: {
    image: "https://media.moddb.com/images/mods/1/22/21115/House.png",
    text: "You are searching first floor for the key of the basement, house is dirty and scary. You are scared but you are curios why your dog dont wont leave from basement door.",
    buttons: [["Go to second Floor", "advanceTo(scenario.seven)"],["Search the Kitchen", "advanceTo(scenario.six)"],["Go to Bedroom", "advanceTo(scenario.tenn)"],["Go Bathroom", "advanceTo(scenario.eleven)"]]
  },
  six: {
    image: "https://denniscooperblog.com/wp-content/uploads/2016/10/screen-shot-2016-06-19-at-85037-pm-crop-u21401.jpg",
    text: "You enter in the Kitchen, where should I look first?",
    buttons: [["Drawers", "advanceTo(scenario.eight)"],["Table", "advanceTo(scenario.nine)"]]
  },
  seven: {
    image: "https://i.pinimg.com/originals/85/10/69/8510699e206ed5a081b9ad4454acb1c0.jpg",
    text: "You are going up and you heard something and you are so scared without your dog, you are going back",
    buttons: [["Go Back", "advanceTo(scenario.five)"]]
  },
  eight: {
    image: "https://cdn1.eyeem.com/thumb/19d43a1912997aa27a92c5d520923768b6e48019-1426052488/w/800",
    text: "You searched Drawers and didnt find anything you can use",
    buttons: [["Search Table", "advanceTo(scenario.nine)"], ["Go back", "advanceTo(scenario.five)"] ]
  },
  nine: {
    image: "https://c.stocksy.com/a/jvz800/z9/2144687.jpg?1565291583",
    text: "You searched Table and you find a note",
    buttons: [["Read the note", "advanceTo(scenario.twelve)"], ["Go back", "advanceTo(scenario.five)"] ]
  },
  tenn: {
    image: "https://i.dailymail.co.uk/i/pix/2014/06/20/article-0-1EEE980800000578-934_964x674.jpg",
    text: "You enter in bedroom on first floor, what do you want to search",
    buttons: [["Search Bed", "advanceTo(scenario.thirteen)"],["Search Drawers", "advanceTo(scenario.fourtheen)"],["Search Another Drawers", "advanceTo(scenario.fiftheen)"], ["Go back", "advanceTo(scenario.five)"] ]
  },
  thirteen: {//search bed
    image: "https://images.fatherly.com/wp-content/uploads/2019/04/ghost.jpg?q=65&enable=upscale&w=600",
    text: "When you get closer to bed you see something under blanket, you get interested and scary at same time",
    buttons: [["See what is under blanket", "advanceTo(scenario.under_blanket)"],["Search Drawers", "advanceTo(scenario.fourtheen)"],["Search Another Drawers", "advanceTo(scenario.fiftheen)"], ["Go back", "advanceTo(scenario.five)"] ]
  },
  under_blanket: {//search bed
    image: "https://s24193.pcdn.co/wp-content/uploads/2017/07/scary-stories-ENTITY-Instagram-monteirorror-944x720.png",
    text: "You come near bed and slowly taking off blanket and... ",
    buttons: [["Go Back", "advanceTo(scenario.back_bedroom)"],["Search Drawers", "advanceTo(scenario.fourtheen)"],["Search Another Drawers", "advanceTo(scenario.fiftheen)"], ["Go back", "advanceTo(scenario.five)"] ]
  },
  back_bedroom: {//search bed
    image: "https://media.moddb.com/images/mods/1/22/21115/House.png",
    text: "You are shaking!! You don't understand what the hell you just saw... ",
    buttons: [["Search Drawers", "advanceTo(scenario.fourtheen)"],["Search Another Drawers", "advanceTo(scenario.fiftheen)"], ["Go back", "advanceTo(scenario.five)"] ]
  },
  fourtheen: {//search bed
    image: "https://pbs.twimg.com/media/BTGGpzeCcAAzpvg.jpg",
    text: "Why someone have these stuff in badroom drawer ? What the hell happend here ?",
    buttons: [["Search Drawers", "advanceTo(scenario.fourtheen)"],["Search Another Drawers", "advanceTo(scenario.fiftheen)"], ["Go back", "advanceTo(scenario.five)"] ]
  },
  fiftheen: {//search bed
    image: "https://www.rd.com/wp-content/uploads/2018/07/13-Best-Ghost-Stories-for-Your-Next-Sleepover-12-760x506.jpg",
    text: "I found a key I will take the key and try to opet basement door.",
    buttons: [["Search Drawers", "advanceTo(scenario.fourtheen)"],["Search Bed", "advanceTo(scenario.thirteen)"], ["Go back", "advanceTo(scenario.back_with_key)"] ]
  },
   back_with_key: {
    image: "https://media.moddb.com/images/mods/1/22/21115/House.png",
    text: "What a hell is here in this creepy house? I need to leave this house",
    buttons: [["Go to second Floor", "advanceTo(scenario.seven)"],["Search the Kitchen", "advanceTo(scenario.six)"],["Go to Bedroom", "advanceTo(scenario.tenn)"],["Go Bathroom", "advanceTo(scenario.eleven)"]]
  },
  eleven: {//Bathroom
    image: "http://khoof.files.wordpress.com/2013/04/5477793_783e_1024x2000.jpg",
    text: "You enter in bedroom on the sight you see some shadow over the bathtub.. What the Fuck is that.. it saw me! Should I run ? ",
    buttons: [["Start Running", "advanceTo(scenario.five_one)"] ]
  },
   five_one: {
    image: "https://media.moddb.com/images/mods/1/22/21115/House.png",
    text: "You are searching first floor for the key of the basement, house is dirty and scary. You are scared but you are curios why your dog dont wont leave from basement door.",
    buttons: [["Go to second Floor", "advanceTo(scenario.seven_one)"],["Go to the Kitchen", "advanceTo(scenario.six)"],["Go to Bedroom", "advanceTo(scenario.tenn)"],["Go Outside", "advanceTo(scenario.outside_one)"]]
  },
  outside_one: {
    image: "https://vignette.wikia.nocookie.net/creepypasta/images/0/0b/20090227001613_2008-08-17_0542-1-.jpg/revision/latest?cb=20121104230637",
    text: "Should I leave without your dog ?",
    buttons: [["Yes, Fuck damn dog", "advanceTo(scenario.fuck_dog)"],["No! I can't leave your dog", "advanceTo(scenario.five_one)"]]
  },
  fuck_dog: {
    image: "http://www.unexplainable.net/brainbox/uploads/1/Road_11.jpg",
    text: "You opened the door, its dark, you see some creepy thing going foward to you, run back in the damn house!!!",
    buttons: [["Back to House", "advanceTo(scenario.five_one)"]]
  },
  seven_one: {
    image: "https://media.moddb.com/images/mods/1/22/21115/House.png",
    text: "You are searching first floor for the key of the basement, house is dirty and scary. You are scared but you are curios why your dog dont wont leave from basement door.",
    buttons: [["GO", "advanceTo(scenario.to_be_continued)"]]
  },
  to_be_continued: {
    image: "https://vignette.wikia.nocookie.net/ultimate-fanon-roleplay/images/1/11/Hiatus.png/revision/latest?cb=20170713135304",
    text: "",
    buttons: [["Start Over", "advanceTo(scenario.one)"]]
  },
  




  twelve: {
    image: "http://www.scaryforkids.com/pics/creepy-notes-02.jpg",
    text: "Don't open the locked door! Don't trust its whispers! Leave just, leav.. 'Someone didn't have time to finish the note, why? ",
    buttons: [["Go back", "advanceTo(scenario.five)"] ]
  },



};



advanceTo(scenario.one);