const day = "friday";
switch (day) {
  case "monday":
    console.log("Plan my IELTS class");
    console.log("Go to Bagbazar");
    break;
  case "tuesday":
    console.log("Practice questions");
    break;
  case "wednesday":
  case " thursday":
    console.log("Complete training sessions");
  case "friday":
  case "saturday":
  case "sunday":
    console.log("Have Fun");
    break;
  default:
    console.log("Not a valid day");
}
