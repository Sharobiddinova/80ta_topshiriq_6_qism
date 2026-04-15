const checkBtn = document.getElementById("checkBtn");
const apiUrlInput = document.getElementById("apiUrl");
const output = document.getElementById("output");

checkBtn.addEventListener("click", async () => {
  const apiUrl = apiUrlInput.value.trim().replace(/\/$/, "");
  if (!apiUrl) {
    output.textContent = "API URL kiriting.";
    return;
  }

  output.textContent = "Tekshirilmoqda...";

  try {
    const response = await fetch(`${apiUrl}/health`);
    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output.textContent = `Xato: ${error.message}`;
  }
});
