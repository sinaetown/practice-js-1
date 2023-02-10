//generate numbers from 0 to 999
let raceNumber = Math.floor(Math.random() * 1000);

let early = false;
let age = 18;

if(early && age > 18){
  raceNumber += 1000;
}

if(early && age > 18){
  console.log(`Those who are early-comers and are over 18 years old, or have the race number, ${raceNumber}, you will be starting the race at 9:30 am.`);
}
else if(!early && age > 18){
  console.log(`Those who are late-comers and are over 18 years old, or have the race number, ${raceNumber}, you will be starting the race at 11:00 am.`);
}

else if(age < 18){
  console.log(`Those who are late-comers and are under 18 years old, or have the race number, ${raceNumber}, you will be starting the race at 12:30 pm.`);
}

else{
  console.log("Please come to the registration desk, and recieve the race number to join the race.");
}