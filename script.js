document.getElementById("year").textContent = new Date().getFullYear();

const copyBtn = document.getElementById("copyBtn");
const emailField = document.getElementById("emailField");
const copyMsg = document.getElementById("copyMsg");

copyBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailField.value);
    copyMsg.textContent = "Copied.";
  } catch {
    emailField.select();
    document.execCommand("copy");
    copyMsg.textContent = "Copied.";
  }
});
