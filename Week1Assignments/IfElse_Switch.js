let browserName = "Chrome"

if(browserName=="Chrome"){

    console.log("Launching Chrome Browser")

}else {

    console.log("Launching Default Browser")

}

let testType = "Sanity"

switch(true){

    case testType=="Smoke":
    console.log("Running Smoke Tests")
    break;

     case testType=="Sanity":
    console.log("Running Sanity Tests")
    break;

     case testType=="Regression":
    console.log("Running Regression Tests")
    break;

     default:
    console.log("Running Default Smoke Tests")
}