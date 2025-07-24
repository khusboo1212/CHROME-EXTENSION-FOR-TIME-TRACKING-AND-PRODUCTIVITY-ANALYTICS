
// chrome.storage.local.get("siteData", ({ siteData }) => {
//   const list = document.getElementById("usageList");

//   if (!siteData || Object.keys(siteData).length === 0) {
//     list.innerHTML = "<li>No data tracked yet</li>";
//     return;
//   }

//   for (let site in siteData) {
//     const li = document.createElement("li");
//     li.innerText = `${site}: ${Math.round(siteData[site] / 60)} min`;
//     list.appendChild(li);
//   }
// });
chrome.storage.local.get("siteData", ({ siteData }) => {
  const list = document.getElementById("usageList");

  if (!siteData || Object.keys(siteData).length === 0) {
    list.innerHTML = "<li>No data tracked yet</li>";
    return;
  }

  for (let site in siteData) {
    const li = document.createElement("li");
    const seconds = siteData[site];
    const displayTime = seconds >= 60
      ? `${Math.round(seconds / 60)} min`
      : `${seconds} sec`;

    li.innerText = `${site}: ${displayTime}`;
    list.appendChild(li);
  }
});

