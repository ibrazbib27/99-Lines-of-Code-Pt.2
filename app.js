var friends = ["Sam", "Diana", "Haley", "Adam", "Joe"];
for(var x = 0; x < friends.length; x++){
    for(var y = 100; y > 0; y--){
    
                if(y === 100)
                 console.log((friends[x]).toUpperCase() + ":");
                else if(y === 1)
                     console.log("Now for 1 last time, I want you to know " + friends[x] +" that I am lucky to have you in my life");
                else
                    console.log(y + " more times, thats how many more times I am going to tell you " + friends[x] +" that I am lucky to have you in my life");
    
    }
}