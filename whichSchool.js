let choice;

const whichSchool  = function (age) {
  if (age < 13) {
    choice = "Elementary School"
    console.log('You should go to ' + choice + '.')
    return "Elementary School"
  } else if (age <= 18) {
    choice = "Secondary School"
    console.log('You should go to ' + choice + '.')
    return "Secondary School"
  } else {
    choice = "Lighthouse Labs"
    console.log('You should go to ' + choice + '.')
    return "Lighthouse Labs"
  }
}



whichSchool(19)