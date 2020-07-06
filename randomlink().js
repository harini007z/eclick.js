var random = new Array("https://detik.balitrips.site/", "https://detik.balitrips.site/", "https://detik.balitrips.site/", "https://detik.balitrips.site/" );

// or

// Regular Array

var random = new Array();

random[0] = "https://detik.balitrips.site/";
random[1] = "https://detik.balitrips.site/";
random[2] = "https://detik.balitrips.site/";
random[3] = "https://detik.balitrips.site/";
random[4] = "https://detik.balitrips.site/";

function randomlink() {
window.location = random[Math.floor(Math.random()*random.length)];
}
