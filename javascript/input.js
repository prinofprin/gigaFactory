const Hey = "Do not peek!";
let updateTime = "7/8/21 11:53";
//Market price
let marketPrice = 400;

//New wanted price
let wantBdash = 15;
let wantMotor = 1;
let wantStamp = 5;
let wantJetPart = 7;
let wantLongMetal = 5;
let wantPhoton = 1;
let wantBigJunk = 1;
let wantHugeJunk = 3;

//New sell Price
let sellGiga = 0; //autochange
let sellBarrelBot = 50;
let sellBdash = 30;
let sellStamp = 8;

//Old wanted price
let oldWantBdash = 25;
let oldWantMotor = 1;
let oldWantStamp = 7;
let oldWantJetPart = 6;
let oldWantLongMetal = 6;
let oldWantPhoton = 1;
let oldWantBigJunk = 2;
let oldWantHugeJunk = 3;

//Old sell Price
let oldSellGiga = 420;
let oldSellBdash = 50;
let oldSellStamp = 10;
let oldSellBarrelBot = 45;

// Stock
let gigaStock = 3;

// Want Quantity
let wantBdashAmount = 6;
let wantMotorAmount = 0;
let wantStampAmount = 0;
let wantJetPartAmount = 9;
let wantLongMetalAmount = 24;
let wantPhotonAmount = 5;
let wantBigJunkAmount = 36;
let wantHugeJunkAmount = 32;

// Sell Quantity
let sellGigaAmount = 2;
let sellBdashAmount = 8;
let sellStampAmount = 22;
let sellBarrelBotAmount = 3;

let gigaPrice =
  wantBdash * 4 +
  wantMotor * 4 +
  wantStamp * 12 +
  wantJetPart * 4 +
  wantLongMetal * 4 +
  wantPhoton * 4 +
  wantBigJunk * 12 +
  wantHugeJunk * 12 +
  60;

sellGiga = gigaPrice;

document.getElementById("updateTime").innerHTML = updateTime;

function FindPercentChange(newPrice, oldPrice) {
  return ((newPrice - oldPrice) / oldPrice) * 60;
}

function formatPlusSign(n) {
  return (n >= 0 ? "+" : "") + n + "%";
}

function declarePercentChange(sting, varName) {
  document.getElementById(sting).innerHTML = formatPlusSign(varName.toFixed(2));
  if (formatPlusSign(varName.toFixed(2)).search("-") == "-1")
    document.getElementById(sting).style.color = "#1aad6f";
  else document.getElementById(sting).style.color = "#ef485e";
}

//Display price function
function displayPriceChange(slotNo, itemNo, itemName, percentageChange) {
  document.getElementById(slotNo).innerHTML = formatPlusSign(
    percentageChange.toFixed(2)
  );
  if (formatPlusSign(percentageChange.toFixed(2)).search("-") == "-1")
    document.getElementById(slotNo).style.color = "#1aad6f";
  else document.getElementById(slotNo).style.color = "#ef485e";
  document.getElementById(itemNo).innerHTML = itemName;
}

//Giga Price
document.getElementById("gigaPrice").innerHTML = gigaPrice;
document.getElementById("gigaStock").innerHTML = gigaStock;

//Price Tag Section
bDashPriceChange = FindPercentChange(wantBdash, oldWantBdash);
displayPriceChange("slot1", "item1", "Bdash Motor", bDashPriceChange);

motorPriceChange = FindPercentChange(wantMotor, oldWantMotor);
//displayPriceChange("slot2", "item2", "Motor", motorPriceChange);

longMetalPriceChange = FindPercentChange(wantLongMetal, oldWantLongMetal);
displayPriceChange("slot3", "item3", "Long Metal", longMetalPriceChange);

jetPartPriceChange = FindPercentChange(wantJetPart, oldWantJetPart);
displayPriceChange("slot4", "item4", "Jet Part", jetPartPriceChange);

stampPriceChange = FindPercentChange(wantStamp, oldWantStamp);
//displayPriceChange("slot5", "item5", "Kaiser Stamp", stampPriceChange);

photonPriceChange = FindPercentChange(wantPhoton, oldWantPhoton);
//displayPriceChange("slot6", "item6", "Photon Rail", photonPriceChange);

bigJunkPriceChange = FindPercentChange(wantBigJunk, oldWantBigJunk);
displayPriceChange("slot7", "item7", "Big Junk", bigJunkPriceChange);

HugeJunkPriceChange = FindPercentChange(wantHugeJunk, oldWantHugeJunk);
//displayPriceChange("slot8", "item8", "Huge Junk", HugeJunkPriceChange);

gigaPriceChange = FindPercentChange(sellGiga, oldSellGiga);
//displayPriceChange("slot9", "item9", "Sell-Giga", gigaPriceChange);

sellBdashPriceChange = FindPercentChange(sellBdash, oldSellBdash);
//displayPriceChange("slot10", "item10", "Sell-Bdash", sellBdashPriceChange);

sellStampPriceChange = FindPercentChange(sellStamp, oldSellStamp);
//displayPriceChange(
//"slot11",
//"item11",
//"Sell-KaiserStamp",
//sellStampPriceChange
//);

sellBarrelBotPriceChange = FindPercentChange(sellBarrelBot, oldSellBarrelBot);
//displayPriceChange(
//"slot12",
//"item12",
//"Sell-Barrel Bot",
//sellBarrelBotPriceChange
//);

//Price Tag Animation

function typingDisplayitem(itemNo, itemName, delay) {
  var app = document.getElementById(itemNo);

  var typewriter = new Typewriter(app, {
    loop: false,
    cursor: "",
    delay: Math.floor(Math.random() * 100) + 50,
  });

  typewriter.pauseFor(delay).typeString(itemName).pauseFor(1000).start();
}

displayPriceChange("slot5", "item5", "Kaiser Stamp", stampPriceChange);
typingDisplayitem("item5", "Kaiser Stamp", 500);

displayPriceChange("slot6", "item6", "Photon Rail", photonPriceChange);
typingDisplayitem("item6", "Photon Rail", 0);

displayPriceChange("slot8", "item8", "Huge Junk", HugeJunkPriceChange);
typingDisplayitem("item8", "Huge Junk", 1400);

displayPriceChange("slot2", "item2", "Motor", motorPriceChange);
typingDisplayitem("item2", "Motor", 300);

// Typing animation for hero display
function typingAnimationWant() {
  let app = document.getElementById("typing-want");

  let typewriter = new Typewriter(app, {
    loop: true,
    delay: 68,
  });
  let pause = 1500;

  typewriter
    .typeString("Bdash")
    .typeString("\xa0\xa0" + wantBdash.toString() + "\xa0" + "บาท")
    .pauseFor(pause)
    .deleteAll()
    .typeString("Motor")
    .typeString("\xa0\xa0" + wantMotor.toString() + "\xa0" + "บาท")
    .pauseFor(pause)
    .deleteAll()
    .typeString("Long Metal")
    .typeString("\xa0\xa0" + wantLongMetal.toString() + "\xa0" + "บาท")
    .pauseFor(pause)
    .deleteAll()
    .typeString("Jet Part")
    .typeString("\xa0\xa0" + wantJetPart.toString() + "\xa0" + "บาท")
    .pauseFor(pause)
    .deleteAll()
    .typeString("Kaiser Stamp")
    .typeString("\xa0\xa0" + wantStamp.toString() + "\xa0" + "บาท")
    .pauseFor(pause)
    .deleteAll()
    .typeString("Photon Rail")
    .typeString("\xa0\xa0" + wantPhoton.toString() + "\xa0" + "บาท")
    .pauseFor(pause)
    .deleteAll()
    .typeString("Huge Junk")
    .typeString("\xa0\xa0" + wantHugeJunk.toString() + "\xa0" + "บาท")
    .pauseFor(pause)
    .deleteAll()
    .typeString("Big Junk")
    .typeString("\xa0\xa0" + wantBigJunk.toString() + "\xa0" + "บาท")
    .pauseFor(pause)
    .deleteAll()

    .start();
}

typingAnimationWant();

// Want & Sell Price Section
function declareWantAmount(idName, varName) {
  document.getElementById(idName).innerHTML = varName;
  if (varName < 1) {
    document.getElementById(idName).innerHTML = "ไม่รับ";
    document.getElementById(idName).setAttribute("lang", "th");
    document.getElementById(idName).style.background = "#ef485e";
    document.getElementById(idName).style.color = "#ffffff";
    document.getElementById(idName).style.width = "5rem";
    document.getElementById(idName).style.textAlign = "center";
    document.getElementById(idName).style.borderRadius = "7px";
  } else {
    document.getElementById(idName).style.color = "#1d2329";
  }
}

function displayBdash() {
  document.getElementById("wantBdashPrice").innerHTML = wantBdash;
  declarePercentChange("wantBdashChange", bDashPriceChange);
  declareWantAmount("wantBdashAmount", wantBdashAmount);
}

function displayMotor() {
  document.getElementById("wantMotorPrice").innerHTML = wantMotor;
  declarePercentChange("wantMotorChange", motorPriceChange);
  declareWantAmount("wantMotorAmount", wantMotorAmount);
}

function displayStamp() {
  document.getElementById("wantStampPrice").innerHTML = wantStamp;
  declarePercentChange("wantStampChange", stampPriceChange);
  declareWantAmount("wantStampAmount", wantStampAmount);
}

function displayLongMetal() {
  document.getElementById("wantLongMetalPrice").innerHTML = wantLongMetal;
  declarePercentChange("wantLongMetalChange", longMetalPriceChange);
  declareWantAmount("wantLongMetalAmount", wantLongMetalAmount);
}

function displayJetPart() {
  document.getElementById("wantJetPartPrice").innerHTML = wantJetPart;
  declarePercentChange("wantJetPartChange", jetPartPriceChange);
  declareWantAmount("wantJetPartAmount", wantJetPartAmount);
}

function displayPhoton() {
  document.getElementById("wantPhotonPrice").innerHTML = wantPhoton;
  declarePercentChange("wantPhotonChange", photonPriceChange);
  declareWantAmount("wantPhotonAmount", wantPhotonAmount);
}

function displayBigJunk() {
  document.getElementById("wantBigJunkPrice").innerHTML = wantBigJunk;
  declarePercentChange("wantBigJunkChange", bigJunkPriceChange);
  declareWantAmount("wantBigJunkAmount", wantBigJunkAmount);
}

function displayHugeJunk() {
  document.getElementById("wantHugeJunkPrice").innerHTML = wantHugeJunk;
  declarePercentChange("wantHugeJunkChange", HugeJunkPriceChange);
  declareWantAmount("wantHugeJunkAmount", wantHugeJunkAmount);
}

function displaySellGiga() {
  document.getElementById("sellGigaPrice").innerHTML = sellGiga;
  declarePercentChange("sellGigaChange", gigaPriceChange);
  declareWantAmount("sellGigaAmount", sellGigaAmount);
}

function displaySellBdash() {
  document.getElementById("sellBdashPrice").innerHTML = sellBdash;
  declarePercentChange("sellBdashChange", sellBdashPriceChange);
  declareWantAmount("sellBdashAmount", sellBdashAmount);
}

function displaySellStamp() {
  document.getElementById("sellStampPrice").innerHTML = sellStamp;
  declarePercentChange("sellStampChange", sellStampPriceChange);
  declareWantAmount("sellStampAmount", sellStampAmount);
}

function displaySellBarrelBot() {
  document.getElementById("sellBarrelBotPrice").innerHTML = sellBarrelBot;
  declarePercentChange("sellBarrelBotChange", sellBarrelBotPriceChange);
  declareWantAmount("sellBarrelBotAmount", sellBarrelBotAmount);
}

displayBdash();
displayMotor();
displayStamp();
displayLongMetal();
displayJetPart();
displayPhoton();
displayBigJunk();
displayHugeJunk();
displaySellGiga();
displaySellBdash();
displaySellStamp();
displaySellBarrelBot();

//Want & Sell Toggle Section
function gridToggleOn(nameId) {
  document.getElementById(nameId).classList.remove("grid-1x5v2");
  document.getElementById(nameId).classList.toggle("grid-1x5");
  document.getElementById(nameId).setAttribute("lang", "en");
}
function gridToggleOff(nameId) {
  document.getElementById(nameId).classList.remove("grid-1x5");
  document.getElementById(nameId).classList.toggle("grid-1x5v2");
  document.getElementById(nameId).setAttribute("lang", "th");
}

document.getElementById("wantBdash").addEventListener("click", toggleBdash);
function toggleBdash() {
  if (document.getElementById("wantBdash").title == "OFF") {
    document.getElementById("wantBdash").title = "ON";
    gridToggleOn("wantBdash");
    document.getElementById("wantBdashPrice").style.color = "#1d2329";
    displayBdash();
  } else if (document.getElementById("wantBdash").title == "ON") {
    document.getElementById("wantBdash").title = "OFF";
    gridToggleOff("wantBdash");
    document.getElementById("wantBdashPrice").style.color = "#003f5c";
    document.getElementById("wantBdashPrice").innerHTML =
      "ดรอปจาก: Devil Kaiser" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "ด่าน: 7/5" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "อัตราดรอป: เฉลี่ย 100-150 รอบต่อชิ้น";
    document.getElementById("wantBdashChange").innerHTML = "";
    document.getElementById("wantBdashAmount").innerHTML = "";
  }
}

document.getElementById("wantMotor").addEventListener("click", toggleMotor);
function toggleMotor() {
  if (document.getElementById("wantMotor").title == "OFF") {
    document.getElementById("wantMotor").title = "ON";
    gridToggleOn("wantMotor");
    document.getElementById("wantMotorPrice").style.color = "#1d2329";
    displayMotor();
  } else if (document.getElementById("wantMotor").title == "ON") {
    document.getElementById("wantMotor").title = "OFF";
    gridToggleOff("wantMotor");
    document.getElementById("wantMotorPrice").style.color = "#003f5c";
    document.getElementById("wantMotorPrice").innerHTML =
      "ดรอปจาก: Phototype Kaiser, Dr.Zapper, etc" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "ด่าน: 7/5, 7/6, etc " +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "";
    document.getElementById("wantMotorChange").innerHTML = "";
    document.getElementById("wantMotorAmount").innerHTML = "";
  }
}

document.getElementById("wantStamp").addEventListener("click", toggleStamp);
function toggleStamp() {
  if (document.getElementById("wantStamp").title == "OFF") {
    document.getElementById("wantStamp").title = "ON";
    gridToggleOn("wantStamp");
    document.getElementById("wantStampPrice").style.color = "#1d2329";
    displayStamp();
  } else if (document.getElementById("wantStamp").title == "ON") {
    document.getElementById("wantStamp").title = "OFF";
    gridToggleOff("wantStamp");
    document.getElementById("wantStampPrice").style.color = "#003f5c";
    document.getElementById("wantStampPrice").innerHTML =
      "ดรอปจาก: Phototype Kaiser, Devil Kaiser" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "ด่าน: 7/5, 7/6 " +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "";
    document.getElementById("wantStampChange").innerHTML = "";
    document.getElementById("wantStampAmount").innerHTML = "";
  }
}

document
  .getElementById("wantLongMetal")
  .addEventListener("click", toggleLongMetal);
function toggleLongMetal() {
  if (document.getElementById("wantLongMetal").title == "OFF") {
    document.getElementById("wantLongMetal").title = "ON";
    gridToggleOn("wantLongMetal");
    document.getElementById("wantLongMetalPrice").style.color = "#1d2329";
    displayLongMetal();
  } else if (document.getElementById("wantLongMetal").title == "ON") {
    document.getElementById("wantLongMetal").title = "OFF";
    gridToggleOff("wantLongMetal");
    document.getElementById("wantLongMetalPrice").style.color = "#003f5c";
    document.getElementById("wantLongMetalPrice").innerHTML =
      "ดรอปจาก: Lucky box" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "หรือผสมจาก Razan: Zine Bar x 3ชิ้น กับ Copper Bar x 3ชิ้น" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "";
    document.getElementById("wantLongMetalChange").innerHTML = "";
    document.getElementById("wantLongMetalAmount").innerHTML = "";
  }
}

document.getElementById("wantJetPart").addEventListener("click", toggleJetPart);
function toggleJetPart() {
  if (document.getElementById("wantJetPart").title == "OFF") {
    document.getElementById("wantJetPart").title = "ON";
    gridToggleOn("wantJetPart");
    document.getElementById("wantJetPartPrice").style.color = "#1d2329";
    displayJetPart();
  } else if (document.getElementById("wantJetPart").title == "ON") {
    document.getElementById("wantJetPart").title = "OFF";
    gridToggleOff("wantJetPart");
    document.getElementById("wantJetPartPrice").style.color = "#003f5c";
    document.getElementById("wantJetPartPrice").innerHTML =
      "ดรอปจาก: Carrier Bot" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "ด่าน: 10/3, 11/6" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "";
    document.getElementById("wantJetPartChange").innerHTML = "";
    document.getElementById("wantJetPartAmount").innerHTML = "";
  }
}

document.getElementById("wantPhoton").addEventListener("click", togglePhoton);
function togglePhoton() {
  if (document.getElementById("wantPhoton").title == "OFF") {
    document.getElementById("wantPhoton").title = "ON";
    gridToggleOn("wantPhoton");
    document.getElementById("wantPhotonPrice").style.color = "#1d2329";
    displayPhoton();
  } else if (document.getElementById("wantPhoton").title == "ON") {
    document.getElementById("wantPhoton").title = "OFF";
    gridToggleOff("wantPhoton");
    document.getElementById("wantPhotonPrice").style.color = "#003f5c";
    document.getElementById("wantPhotonPrice").innerHTML =
      "ดรอปจาก: Siege Bot" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "ด่าน: 10/6, 11/6" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "";
    document.getElementById("wantPhotonChange").innerHTML = "";
    document.getElementById("wantPhotonAmount").innerHTML = "";
  }
}

document.getElementById("wantBigJunk").addEventListener("click", toggleBigJunk);
function toggleBigJunk() {
  if (document.getElementById("wantBigJunk").title == "OFF") {
    document.getElementById("wantBigJunk").title = "ON";
    gridToggleOn("wantBigJunk");
    document.getElementById("wantBigJunkPrice").style.color = "#1d2329";
    displayBigJunk();
  } else if (document.getElementById("wantBigJunk").title == "ON") {
    document.getElementById("wantBigJunk").title = "OFF";
    gridToggleOff("wantBigJunk");
    document.getElementById("wantBigJunkPrice").style.color = "#003f5c";
    document.getElementById("wantBigJunkPrice").innerHTML =
      "ดรอปจาก: Leaking Pip, รางวัลจาก 7/5" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "ด่าน: 7/5, 8/1" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "อัตราดรอป: เฉลีย 1 รอบต่อชิ้น";
    document.getElementById("wantBigJunkChange").innerHTML = "";
    document.getElementById("wantBigJunkAmount").innerHTML = "";
  }
}

document
  .getElementById("wantHugeJunk")
  .addEventListener("click", toggleHugeJunk);
function toggleHugeJunk() {
  if (document.getElementById("wantHugeJunk").title == "OFF") {
    document.getElementById("wantHugeJunk").title = "ON";
    gridToggleOn("wantHugeJunk");
    document.getElementById("wantHugeJunkPrice").style.color = "#1d2329";
    displayHugeJunk();
  } else if (document.getElementById("wantHugeJunk").title == "ON") {
    document.getElementById("wantHugeJunk").title = "OFF";
    gridToggleOff("wantHugeJunk");
    document.getElementById("wantHugeJunkPrice").style.color = "#003f5c";
    document.getElementById("wantHugeJunkPrice").innerHTML =
      "ดรอปจาก: Leaking Pip, ผสมของชิ้นใหญ่พลาด?" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "ด่าน: 8/1" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "อัตราดรอป: เฉลีย 1 รอบต่อชิ้น (รอบละ 5นาที)";
    document.getElementById("wantHugeJunkChange").innerHTML = "";
    document.getElementById("wantHugeJunkAmount").innerHTML = "";
  }
}

document.getElementById("sellGiga").addEventListener("click", toggleSellGiga);
function toggleSellGiga() {
  if (document.getElementById("sellGiga").title == "OFF") {
    document.getElementById("sellGiga").title = "ON";
    gridToggleOn("sellGiga");
    document.getElementById("sellGigaPrice").style.color = "#1d2329";
    displaySellGiga();
  } else if (document.getElementById("sellGiga").title == "ON") {
    document.getElementById("sellGiga").title = "OFF";
    gridToggleOff("sellGiga");
    document.getElementById("sellGigaPrice").style.color = "#003f5c";
    document.getElementById("sellGigaPrice").innerHTML =
      "SkillRequried: GeniusInvention 5 (Lv.70)" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "ManaRequied: 50" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "CompoundSuccessRate: 99%";
    document.getElementById("sellGigaChange").innerHTML = "";
    document.getElementById("sellGigaAmount").innerHTML = "";
  }
}

document.getElementById("sellBdash").addEventListener("click", toggleSellBdash);
function toggleSellBdash() {
  if (document.getElementById("sellBdash").title == "OFF") {
    document.getElementById("sellBdash").title = "ON";
    gridToggleOn("sellBdash");
    document.getElementById("sellBdashPrice").style.color = "#1d2329";
    displaySellBdash();
  } else if (document.getElementById("sellBdash").title == "ON") {
    document.getElementById("sellBdash").title = "OFF";
    gridToggleOff("sellBdash");
    document.getElementById("sellBdashPrice").style.color = "#003f5c";
    document.getElementById("sellBdashPrice").innerHTML =
      "ดรอปจาก: Devil Kaiser" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "ด่าน: 7/5" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "อัตราดรอป: เฉลี่ย 100-150 รอบต่อชิ้น";
    document.getElementById("sellBdashChange").innerHTML = "";
    document.getElementById("sellBdashAmount").innerHTML = "";
  }
}

document.getElementById("sellStamp").addEventListener("click", toggleSellStamp);
function toggleSellStamp() {
  if (document.getElementById("sellStamp").title == "OFF") {
    document.getElementById("sellStamp").title = "ON";
    gridToggleOn("sellStamp");
    document.getElementById("sellStampPrice").style.color = "#1d2329";
    displaySellStamp();
  } else if (document.getElementById("sellStamp").title == "ON") {
    document.getElementById("sellStamp").title = "OFF";
    gridToggleOff("sellStamp");
    document.getElementById("sellStampPrice").style.color = "#003f5c";
    document.getElementById("sellStampPrice").innerHTML =
      "ดรอปจาก: Phototype Kaiser, Devil Kaiser" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "ด่าน: 7/5, 7/6 " +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "";
    document.getElementById("sellStampChange").innerHTML = "";
    document.getElementById("sellStampAmount").innerHTML = "";
  }
}

document
  .getElementById("sellBarrelBot")
  .addEventListener("click", toggleSellBarrelBot);
function toggleSellBarrelBot() {
  if (document.getElementById("sellBarrelBot").title == "OFF") {
    document.getElementById("sellBarrelBot").title = "ON";
    gridToggleOn("sellBarrelBot");
    document.getElementById("sellBarrelBotPrice").style.color = "#1d2329";
    displaySellBarrelBot();
  } else if (document.getElementById("sellBarrelBot").title == "ON") {
    document.getElementById("sellBarrelBot").title = "OFF";
    gridToggleOff("sellBarrelBot");
    document.getElementById("sellBarrelBotPrice").style.color = "#003f5c";
    document.getElementById("sellBarrelBotPrice").innerHTML =
      "ผสมจาก: Mole's Workshop lv.4" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "สเตตัส: Tel+4" +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      "";
    document.getElementById("sellBarrelBotChange").innerHTML = "";
    document.getElementById("sellBarrelBotAmount").innerHTML = "";
  }
}

//Price calculation section

function summingPrice() {
  sumPrice =
    document.getElementById("inputBdashPrice").value * 4 +
    document.getElementById("inputMotorPrice").value * 4 +
    document.getElementById("inputJetPartPrice").value * 4 +
    document.getElementById("inputPhotonPrice").value * 4 +
    document.getElementById("inputLongMetalPrice").value * 4 +
    document.getElementById("inputStampPrice").value * 12 +
    document.getElementById("inputBigJunkPrice").value * 12 +
    document.getElementById("inputHugeJunkPrice").value * 12;
  document.getElementById("sumPrice").innerHTML = sumPrice;
  document.getElementById("sumPrice2").innerHTML = sumPrice;
  document.getElementById("sumGigaPrice").innerHTML = sumPrice + 60;
}

function intialPriceCalculation(inputID, outputID, price, amount) {
  document.getElementById(inputID).value = price;
  document.getElementById(outputID).innerHTML = price * amount;
  summingPrice();
}

function customPriceCalculation(inputID, outputID, amount) {
  let customeBdashPrice = document.getElementById(inputID).value;
  document.getElementById(outputID).innerHTML = customeBdashPrice * amount;
  summingPrice();
  myChart.data.datasets = [
    {
      label: "สัดส่วนราคาส่วนผสม",
      data: [
        document.getElementById("outputBdashPrice").innerHTML,
        document.getElementById("outputMotorPrice").innerHTML,
        document.getElementById("outputJetPartPrice").innerHTML,
        document.getElementById("outputPhotonPrice").innerHTML,
        document.getElementById("outputLongMetalPrice").innerHTML,
        document.getElementById("outputStampPrice").innerHTML,
        document.getElementById("outputBigJunkPrice").innerHTML,
        document.getElementById("outputHugeJunkPrice").innerHTML,
      ],
      backgroundColor: [
        "#003f5c",
        "#2f4b7c",
        "#665191",
        "#a05195",
        "#d45087",
        "#f95d6a",
        "#ff7c43",
        "#ffa600",
      ],
      borderWidth: 2,
    },
  ];

  comperisonChart.data.datasets = [
    {
      data: [
        marketPrice,
        document.getElementById("sellGigaPrice").innerHTML,
        document.getElementById("sumPrice").innerHTML,
      ],
      backgroundColor: ["#8c2622", "#cd6326", "#ffaa1f"],
      borderWidth: 2,
    },
  ];

  myChart.update();
  comperisonChart.update();
}

intialPriceCalculation("inputBdashPrice", "outputBdashPrice", wantBdash, 4);
document
  .getElementById("inputBdashPrice")
  .addEventListener("input", function () {
    customPriceCalculation("inputBdashPrice", "outputBdashPrice", 4);
  });

intialPriceCalculation("inputMotorPrice", "outputMotorPrice", wantMotor, 4);
document
  .getElementById("inputMotorPrice")
  .addEventListener("input", function () {
    customPriceCalculation("inputMotorPrice", "outputMotorPrice", 4);
  });

intialPriceCalculation(
  "inputJetPartPrice",
  "outputJetPartPrice",
  wantJetPart,
  4
);
document
  .getElementById("inputJetPartPrice")
  .addEventListener("input", function () {
    customPriceCalculation("inputJetPartPrice", "outputJetPartPrice", 4);
  });

intialPriceCalculation("inputPhotonPrice", "outputPhotonPrice", wantPhoton, 4);
document
  .getElementById("inputPhotonPrice")
  .addEventListener("input", function () {
    customPriceCalculation("inputPhotonPrice", "outputPhotonPrice", 4);
  });

intialPriceCalculation(
  "inputLongMetalPrice",
  "outputLongMetalPrice",
  wantLongMetal,
  4
);
document
  .getElementById("inputLongMetalPrice")
  .addEventListener("input", function () {
    customPriceCalculation("inputLongMetalPrice", "outputLongMetalPrice", 4);
  });

intialPriceCalculation("inputStampPrice", "outputStampPrice", wantStamp, 12);
document
  .getElementById("inputStampPrice")
  .addEventListener("input", function () {
    customPriceCalculation("inputStampPrice", "outputStampPrice", 12);
  });

intialPriceCalculation(
  "inputBigJunkPrice",
  "outputBigJunkPrice",
  wantBigJunk,
  12
);
document
  .getElementById("inputBigJunkPrice")
  .addEventListener("input", function () {
    customPriceCalculation("inputBigJunkPrice", "outputBigJunkPrice", 12);
  });

intialPriceCalculation(
  "inputHugeJunkPrice",
  "outputHugeJunkPrice",
  wantHugeJunk,
  12
);
document
  .getElementById("inputHugeJunkPrice")
  .addEventListener("input", function () {
    customPriceCalculation("inputHugeJunkPrice", "outputHugeJunkPrice", 12);
  });

// All Chart

let ctx = document.getElementById("ingredientPriceChart");
let myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: [
      "Bdash Motor",
      "Motor",
      "Jet Part",
      "Photon Rail",
      "Long Metal",
      "Kaiser Stamp",
      "Big Junk",
      "Huge Junk",
    ],
    datasets: [
      {
        data: [
          document.getElementById("outputBdashPrice").innerHTML,
          document.getElementById("outputMotorPrice").innerHTML,
          document.getElementById("outputJetPartPrice").innerHTML,
          document.getElementById("outputPhotonPrice").innerHTML,
          document.getElementById("outputLongMetalPrice").innerHTML,
          document.getElementById("outputStampPrice").innerHTML,
          document.getElementById("outputBigJunkPrice").innerHTML,
          document.getElementById("outputHugeJunkPrice").innerHTML,
        ],
        backgroundColor: [
          "#ffaa1f",
          "#f39521",
          "#e58023",
          "#d56c25",
          "#c45a26",
          "#b34826",
          "#a03724",
          "#8c2622",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "สัดส่วนราคาส่วนผสม",
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
  },
});

let comperisonCtx = document.getElementById("comparisonPriceChart");
let comperisonChart = new Chart(comperisonCtx, {
  type: "bar",
  data: {
    labels: ["ราคาตลาด", "ราคากีก้าเราตอนนี้", "ราคาส่วนผสมรวม"],
    datasets: [
      {
        data: [
          marketPrice,
          document.getElementById("gigaPrice").innerHTML,
          document.getElementById("sumPrice").innerHTML,
        ],
        backgroundColor: ["#8c2622", "#cd6326", "#ffaa1f"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
        borderRadius: 10,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "เปรียบเทียบราคาตลาด",
      },
      legend: {
        display: false,
      },
    },
  },
});

let historicalCtx = document.getElementById("historicalChart");
historicalCtx.height = 50;
let historicalChart = new Chart(historicalCtx, {
  type: "line",
  data: {
    labels: [
      "W0",
      "W1 (เกิดการเสกสัตว์เลี้ยง Sting9)",
      "W2",
      "W3 (กิจกรรมหาสมบัติมีสุ่มได้ Bdash)",
      "W4 (กิจกรรมหาสมบัติมีสุ่มได้ Bdash)",
      "W5",
      "w6",
    ],
    datasets: [
      {
        data: [
          760,
          540,
          640,
          550,
          480,
          400,
          document.getElementById("gigaPrice").innerHTML,
        ],
        backgroundColor: [
          "#17191f",
          "#ef485e",
          "#17191f",
          "#ef485e",
          "#ef485e",
          "#17191f",
          "#d8901a",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: "ราคา(บาท)",
        },
        max: 800,
        min: 200,
        ticks: {
          stepSize: 200,
        },
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 0.5,
        to: 0,
        loop: true,
      },
    },
    elements: {
      line: {
        borderColor: "#d8901a",
        tension: 0.1,
      },
    },
    plugins: {
      title: {
        display: false,
        text: "เปรียบเทียบราคาตลาด",
      },
      legend: {
        display: false,
      },
    },
  },
});

//Background
VANTA.DOTS({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color2: 0xffffff,
  backgroundColor: 0xffffff,
  size: 4.0,
  spacing: 80.0,
});

VANTA.NET({
  el: "#lower-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xfea80c,
  points: 9.0,
  spacing: 20.0,
  backgroundColor: 0xffffff,
});
