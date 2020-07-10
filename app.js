

(document.body.getElementsByTagName("h1")[0]).remove();
(document.body.getElementsByClassName("friend")[0]).remove();
document.addEventListener("DOMContentLoaded", function(){
      
    var button = document.createElement("button");
    var buttonText = document.createTextNode("Sing!");
   
    button.id = "sqrbtn";
    button.style.backgroundColor = "pink";
  
    button.style.borderColor = "blue";
    button.style.marginLeft = "auto";
    button.style.marginRight = "auto";
    button.style.marginTop = "25px";
    button.style.marginBottom = "10px";
    button.style.display = "block";
    button.appendChild(buttonText);
    document.body.appendChild(button);
    button.addEventListener("click", function(){
                            
                            var friends = ["Sam", "Diana", "Haley", "Adam", "Joe"];
                            
for(var x = 0; x < friends.length; x++){
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        div.className = "friend";
     var friendname = document.createTextNode((friends[x]).toUpperCase() + ":");
    h3.appendChild(friendname);
    div.appendChild(h3);
    for(var y = 99; y > 0; y--){
       var p = document.createElement("p");
        var ptext;
                if(y === 1)
                     ptext = document.createTextNode("Now for 1 last time, I want you to know " + friends[x] +" that I am lucky to have you in my life");
                else
                   ptext = document.createTextNode(y + " more times, thats how many more times I am going to tell you " + friends[x] +" that I am lucky to have you in my life");
    p.appendChild(ptext);
    div.appendChild(p);
    }
        document.body.appendChild(div);
}
                            
                            })

})
