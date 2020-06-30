var random = new Array("https://bit.ly/3dCmEIz", "https://bit.ly/3dAdw7r", "https://bit.ly/2NC5foK", "https://bit.ly/3eDyMKR", "https://bit.ly/3dFng0a" , "https://bit.ly/2A7tGav", "https://bit.ly/2YDff7N", "https://bit.ly/2BfiBEY", "https://bit.ly/2Zhzerp" );

// or

// Regular Array

var random = new Array();

random[0] = "https://bit.ly/3dCmEIz";
random[1] = "https://bit.ly/3dAdw7r";
random[2] = "https://bit.ly/2NC5foK";
random[3] = "https://bit.ly/3eDyMKR";
random[4] = "https://bit.ly/3dFng0a";
random[5] = "https://bit.ly/2A7tGav";
random[6] = "https://bit.ly/2YDff7N";
random[7] = "https://bit.ly/2BfiBEY";
random[8] = "https://bit.ly/2Zhzerp";

function randomlink() {
window.location = random[Math.floor(Math.random()*random.length)];
}