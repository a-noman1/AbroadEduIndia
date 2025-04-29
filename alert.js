// ==== Create Warning HTML ====
function createWarning() {
  const warning = document.createElement("div");
  warning.id = "rotate-warning";
  warning.innerHTML = `
        <div class="warning-box">
            <h1>⚠️ Access Restricted</h1>
            <p>This website is designed for laptops in <strong>landscape mode</strong> only.<br>
            Please switch to a laptop or rotate your device to landscape if possible.</p>
        </div>
    `;
  document.body.appendChild(warning);
}

// ==== Check Screen and Orientation ====
function checkAccess() {
  const warning = document.getElementById("rotate-warning");
  const content = document.getElementById("content");
  const isLandscape = window.innerWidth > window.innerHeight;
  const isLaptopSize = window.innerWidth >= 1024;

  if (isLandscape && isLaptopSize) {
    warning.style.display = "none";
    if (content) content.style.display = "block";
  } else {
    warning.style.display = "flex";
    if (content) content.style.display = "none";
  }
}

// ==== Init Everything ====
window.addEventListener("load", () => {
  createWarning();
  checkAccess();
});

window.addEventListener("resize", checkAccess);
window.addEventListener("orientationchange", checkAccess);
