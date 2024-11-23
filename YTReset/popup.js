document.getElementById('resetBtn').addEventListener('click', async () => {
    const keywords = document.getElementById('keywords').value;
    if (keywords.trim()) {
      chrome.storage.local.set({ keywords }, () => {
        alert('Keywords saved. Reload YouTube to see the updated feed.');
      });
    } else {
      alert('Please enter valid keywords.');
    }
  });
  