document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const user = await res.json();
    alert('Login successful!');
    window.location.href = 'dashboard.html';
  } else {
    alert('Login failed');
  }
});
