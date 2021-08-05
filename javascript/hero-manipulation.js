let gigaCannonDmg = 1100;
let missileDmg = 580;
let megaHammerDmg = 170;
let megaPunchDmg = 150;
let skyDrillDmg = 390;
let AutoGyroGunDmg = 270;

let gigaCannonDamageResult = 1100;
let missileDmgResult = 580;
let megaHammerDmgResult = 170;
let megaPunchDmgResult = 150;
let skyDrillDmgResult = 390;
let AutoGyroGunDmgResult = 270;

let def = 0;

document
  .getElementById("gigaDamageList")
  .addEventListener("click", changeHeroSection);

document
  .getElementById("heroRemove2")
  .addEventListener("click", changeHeroSection);

function changeHeroSection() {
  document.getElementById("heroRemove").remove();
  document.getElementById("heroRemove2").remove();
  let damageChartContainer = document.createElement("DIV");
  damageChartContainer.classList.add("damage-class-container");
  damageChartContainer.setAttribute("id", "damageChartContainer");
  document.getElementById("heroGrid").appendChild(damageChartContainer);

  let chartHeadingContainer = document.createElement("DIV");
  chartHeadingContainer.classList.add("chart-heading-container");
  chartHeadingContainer.setAttribute("id", "chartHeadingContainer");
  document
    .getElementById("damageChartContainer")
    .appendChild(chartHeadingContainer);

  let damageChartHeading = document.createElement("H2");
  damageChartHeading.classList.add("dameage-chart__heading");
  damageChartHeading.setAttribute("id", "DamageChartHeading");
  damageChartHeading.setAttribute("lang", "th");
  damageChartHeading.innerHTML = "เปรียบเทียบดาเมจ";
  document
    .getElementById("chartHeadingContainer")
    .appendChild(damageChartHeading);

  let damageChartDetail = document.createElement("H3");
  damageChartDetail.classList.add("dameage-chart-detail");
  damageChartDetail.setAttribute("id", "DamageChartDetail");
  damageChartDetail.setAttribute("lang", "th");
  damageChartDetail.innerHTML =
    "ดาเมจเฉลี่ยตุ่นเลเวล 80 TAL: 192 INT: 136 AGI: 123";
  document
    .getElementById("chartHeadingContainer")
    .appendChild(damageChartDetail);

  let damageCanvas = document.createElement("CANVAS");
  damageCanvas.classList.add("damage-canvas");
  damageCanvas.setAttribute("id", "damageCanvas");
  document.getElementById("damageChartContainer").appendChild(damageCanvas);

  //Right section
  let heroRightContainer = document.createElement("DIV");
  heroRightContainer.classList.add("hero-right-container");
  heroRightContainer.setAttribute("id", "heroRightContainer");
  document.getElementById("heroGrid").appendChild(heroRightContainer);

  // Right top
  let heroRightTopContainer = document.createElement("DIV");
  heroRightTopContainer.classList.add("hero-right-top-container");
  heroRightTopContainer.classList.add("container--border");
  heroRightTopContainer.setAttribute("id", "heroRightTopContainer");
  document
    .getElementById("heroRightContainer")
    .appendChild(heroRightTopContainer);

  let damageCalculationHeading = document.createElement("H3");
  damageCalculationHeading.classList.add("damage-calculation-heading");
  damageCalculationHeading.setAttribute("lang", "th");
  damageCalculationHeading.innerHTML = "คำนวนดาเมจกีก้า";
  document
    .getElementById("heroRightTopContainer")
    .appendChild(damageCalculationHeading);

  let damageCalculationDetail = document.createElement("H6");
  damageCalculationDetail.classList.add("damage-calculation-detail");
  damageCalculationDetail.setAttribute("lang", "th");
  damageCalculationDetail.innerHTML =
    "*ดาเมจเฉลี่ยจากจุดศูนย์กลาง (ตุ่นเลเวล 80)";
  document
    .getElementById("heroRightTopContainer")
    .appendChild(damageCalculationDetail);

  //Right top-Dmg Container
  let damageInputContainer = document.createElement("DIV");
  damageInputContainer.classList.add("damage-input-container");
  damageInputContainer.setAttribute("id", "damageInputContainer");
  document
    .getElementById("heroRightTopContainer")
    .appendChild(damageInputContainer);

  let damageInputHeading = document.createElement("H5");
  damageInputHeading.classList.add("remove-vertical-margin");
  damageInputHeading.classList.add("damage-input-heading");
  damageInputHeading.setAttribute("lang", "th");
  damageInputHeading.innerHTML = "ค่า DEF ศัตรู";
  document
    .getElementById("damageInputContainer")
    .appendChild(damageInputHeading);

  let defInput = document.createElement("INPUT");
  defInput.classList.add("def-input");
  defInput.setAttribute("id", "defInput");
  defInput.setAttribute("max", "666");
  defInput.setAttribute("min", "0");
  defInput.setAttribute("type", "number");
  defInput.setAttribute("value", "0");
  document.getElementById("damageInputContainer").appendChild(defInput);

  let damageCalculationText = document.createElement("H5");
  damageCalculationText.classList.add("remove-vertical-margin");
  damageCalculationText.classList.add("damage-calculation-text");
  damageCalculationText.setAttribute("lang", "th");
  damageCalculationText.innerHTML = "ดาเมจ =";
  document
    .getElementById("damageInputContainer")
    .appendChild(damageCalculationText);

  let damageResult = document.createElement("SPAN");
  damageResult.classList.add("damage-result");
  damageResult.setAttribute("id", "damageResult");
  damageResult.innerHTML = "";
  document.getElementById("damageInputContainer").appendChild(damageResult);

  let damageDpsText = document.createElement("H6");
  damageDpsText.classList.add("damage-dps-text");
  damageDpsText.setAttribute("lang", "th");
  damageDpsText.setAttribute("id", "damageResultText");
  damageDpsText.innerHTML = "อัตราการสร้างความเสียหายต่อวินาที(DPS) = ";
  document.getElementById("heroRightTopContainer").appendChild(damageDpsText);

  let dpsResult = document.createElement("SPAN");
  dpsResult.classList.add("dps-result");
  dpsResult.setAttribute("id", "dpsResult");
  dpsResult.innerHTML = "99";
  document.getElementById("damageResultText").appendChild(dpsResult);

  // Right Middle
  let heroRightMiddleContainer = document.createElement("DIV");
  heroRightMiddleContainer.classList.add("container--border");
  heroRightMiddleContainer.classList.add("hero-right-middle-container");
  heroRightMiddleContainer.setAttribute("id", "heroRightMiddleContainer");
  document
    .getElementById("heroRightContainer")
    .appendChild(heroRightMiddleContainer);

  let gigaDetail = document.createElement("H3");
  gigaDetail.classList.add("giga-detail");
  gigaDetail.classList.add("damage-calculation-heading");
  gigaDetail.setAttribute("lang", "th");
  gigaDetail.innerHTML = "ข้อมูลพื้นฐาน";
  document.getElementById("heroRightMiddleContainer").appendChild(gigaDetail);

  let firstGigaDetail = document.createElement("p");
  firstGigaDetail.classList.add("giga-detal-content");
  firstGigaDetail.innerHTML =
    "HP: 5000 + player's HP \xa0\xa0\xa0\xa0  AttackCD: 6s \xa0\xa0\xa0\xa0 MountCD: 12s";
  document
    .getElementById("heroRightMiddleContainer")
    .appendChild(firstGigaDetail);

  let SecondGigaDetail = document.createElement("p");
  SecondGigaDetail.classList.add("giga-detal-content");
  SecondGigaDetail.innerHTML =
    "ManaRequied: 50 \xa0\xa0\xa0\xa0\xa0 RotatingSpeed: 12degs/s";
  document
    .getElementById("heroRightMiddleContainer")
    .appendChild(SecondGigaDetail);

  let ThirdGigaDetail = document.createElement("p");
  ThirdGigaDetail.classList.add("giga-detal-content");
  ThirdGigaDetail.innerHTML = "SkillRequied: GeniusInvention5 (lv. 70)";
  document
    .getElementById("heroRightMiddleContainer")
    .appendChild(ThirdGigaDetail);

  // Damage Calculation
  document
    .getElementById("defInput")
    .addEventListener("input", damageCalculation);

  function damageCalculation() {
    let def = document.getElementById("defInput").value;
    gigaCannonDamageResult = Math.round(
      netDamageCalculation(gigaCannonDmg, def)
    );
    missileDmgResult = Math.round(netDamageCalculation(missileDmg, def));
    megaHammerDmgResult = Math.round(netDamageCalculation(megaHammerDmg, def));
    megaPunchDmgResult = Math.round(netDamageCalculation(megaPunchDmg, def));
    skyDrillDmgResult = Math.round(netDamageCalculation(skyDrillDmg, def));
    AutoGyroGunDmgResult = Math.round(
      netDamageCalculation(AutoGyroGunDmg, def)
    );
    document.getElementById("damageResult").innerHTML = gigaCannonDamageResult;
    document.getElementById("dpsResult").innerHTML = Math.round(
      gigaCannonDamageResult / 6
    );
    updateDamageChart();
  }

  createDamageChart();
  document.getElementById("damageResult").innerHTML = gigaCannonDmg;
}

function netDamageCalculation(damage, def) {
  if (def <= -1) return NaN;
  else if (def <= 36) return damage - damage * ((def * 0.555) / 100);
  else if (def <= 64) return damage - damage * ((def * 0.515) / 100);
  else if (def <= 128) return damage - damage * ((def * 0.39) / 100);
  else if (def <= 256) return damage - damage * ((def * 0.261) / 100);
  else if (def <= 1000) return damage - damage * ((def * 0.156) / 100);
  //512
  else return NaN;
}
//Damage Chart
function createDamageChart() {
  window.damageGiGaCtx = document.getElementById("damageCanvas");
  window.damageGigaChart = new Chart(damageGiGaCtx, {
    type: "bar",
    data: {
      labels: [
        "GigaCannon",
        "Missile4 (4hits)",
        "SkyDrill2 (2hits)",
        "AutoGyroGun5 (Synchro)",
        "MegaHammer2",
        "MegaPunch2",
      ],
      datasets: [
        {
          data: [
            gigaCannonDamageResult,
            missileDmgResult,
            skyDrillDmgResult,
            AutoGyroGunDmgResult,
            megaHammerDmgResult,
            megaPunchDmgResult,
          ],
          backgroundColor: [
            "#ffaa1f",
            "#ed8c22",
            "#d87025",
            "#c15626",
            "#a73d25",
            "#8c2622",
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
            text: "Damage",
          },
        },
      },

      elements: {
        bar: {
          borderWidth: 2,
          borderRadius: 10,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

//update damage chart

function updateDamageChart() {
  damageGigaChart.data.datasets = [
    {
      data: [
        gigaCannonDamageResult,
        missileDmgResult,
        skyDrillDmgResult,
        AutoGyroGunDmgResult,
        megaHammerDmgResult,
        megaPunchDmgResult,
      ],
      backgroundColor: [
        "#ffaa1f",
        "#ed8c22",
        "#d87025",
        "#c15626",
        "#a73d25",
        "#8c2622",
      ],
      borderWidth: 2,
    },
  ];

  damageGigaChart.update();
}
