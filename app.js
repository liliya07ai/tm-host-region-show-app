const regionEl = document.getElementById("region");

if (window.AZURE_REGION && window.AZURE_REGION !== "__AZURE_REGION__") {
    regionEl.textContent = window.AZURE_REGION;
} else {
    regionEl.textContent = "Region not configured";
}