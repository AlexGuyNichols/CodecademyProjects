let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true;
let runnersAge = 18;

if (earlyReg === true && runnersAge >= 18) {
  raceNumber += 1000
};
if (runnersAge > 18 && earlyReg === true) {
  console.log(`Runner number ${raceNumber}, you will race at 9:30am`);
} else if (runnersAge > 18 && earlyReg === false) {
  console.log(`Runner number ${raceNumber}, you will race at 11:00am`)
} else if (runnersAge < 18) {
  console.log(`Runner number ${raceNumber}, you will race at 12:30pm`)
} else {
  console.log(`Please see the registration desk`)
}
