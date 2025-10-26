document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const uid = document.getElementById("uid").value.trim();
  const password = document.getElementById("password").value.trim();
  const statusText = document.getElementById("status");

  if (!uid || !password) {
    statusText.textContent = "Please enter both UID and Password.";
    statusText.style.color = "red";
    return;
  }

  statusText.textContent = "Connecting...";
  statusText.style.color = "#00bfff";

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid, password }),
    });

    const data = await res.json();

    if (data.success) {
      statusText.textContent = "✅ Login Successful! Welcome " + data.name;
      statusText.style.color = "lime";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      statusText.textContent = "❌ " + data.message;
      statusText.style.color = "red";
    }
  } catch (err) {
    statusText.textContent = "⚠️ Network Error. Please try again.";
    statusText.style.color = "orange";
  }
});
