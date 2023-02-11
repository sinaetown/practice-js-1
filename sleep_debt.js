const getSleepHours = (day) => {
    switch (day) {
      case "monday":
        return 5;
      case "tuesday":
        return 5;
      case "wednesday":
        return 4;
      case "thursday":
        return 5;
      case "friday":
        return 6;
      case "saturday":
        return 5;
      case "sunday":
        return 6;
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  
  const getIdealSleepHours = (hrs) => {
    let idealHours = 6;
    if (hrs === undefined) {
      return idealHours * 7;
    } else {
      return hrs * 7;
    }
  };
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    let sub = Math.abs(actualSleepHours - idealSleepHours);
    if (actualSleepHours === idealSleepHours) {
      console.log("Perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You slept about ${sub} hours more than needed!`);
    } else {
      console.log(`You must sleep about ${sub} hours more!`);
    }
  };
  calculateSleepDebt();
  