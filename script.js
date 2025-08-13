function formatTime(date) {
  const opts = { hour: 'numeric', minute: '2-digit' };
  let s = new Intl.DateTimeFormat(undefined, opts).format(date);
  // Lowercase AM/PM if present
  return s.replace('AM', 'am').replace('PM', 'pm');
}

function updateTime() {
  const el = document.getElementById('time');
  if (!el) return;
  el.textContent = formatTime(new Date());
}

// Update time immediately and then every minute
updateTime();
setInterval(updateTime, 60 * 1000);
