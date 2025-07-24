chrome.storage.local.get("siteData", ({ siteData }) => {
  const productiveSites = ["github.com", "leetcode.com", "w3schools.com"];
  const unproductiveSites = ["instagram.com", "facebook.com", "youtube.com"];
  let productive = 0, unproductive = 0;

  for (let site in siteData) {
    if (productiveSites.includes(site)) productive += siteData[site];
    else if (unproductiveSites.includes(site)) unproductive += siteData[site];
  }

  const report = document.getElementById("report");
  report.innerHTML = `
    <p>🟢 Productive Time: ${Math.round(productive / 60)} mins</p>
    <p>🔴 Unproductive Time: ${Math.round(unproductive / 60)} mins</p>
  `;
});
