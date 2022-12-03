let copyToClipboardTooltip = document.getElementById("copyBtn");
let copyToClipboardTooltiptext = document.getElementById("tooltiptext");

copyToClipboardTooltip.addEventListener("click", () => {
  let textToCopy = document.getElementById("tooltip").innerText;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy);
  }
  copyToClipboardTooltiptext.style.visibility = "visible";
  setTimeout(() => {
    copyToClipboardTooltiptext.style.visibility = "hidden";
  }, 800);
});
