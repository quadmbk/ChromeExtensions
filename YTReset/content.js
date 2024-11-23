/*const API_KEY = 'YOUR_YOUTUBE_API_KEY';
const YT_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

chrome.storage.local.get('keywords', async (data) => {
  if (data.keywords) {
    const keywords = data.keywords;

    // Fetch videos using YouTube API
    const response = await fetch(`${YT_SEARCH_URL}?part=snippet&q=${encodeURIComponent(keywords)}&type=video&key=${API_KEY}&maxResults=10`);
    const result = await response.json();

    // Clear the YouTube feed
    const feed = document.querySelector('#contents');
    if (feed) {
      feed.innerHTML = ''; // Clear existing feed

      // Add fetched videos
      result.items.forEach((item) => {
        const video = document.createElement('div');
        video.innerHTML = `
          <a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">
            <img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.title}" />
            <p>${item.snippet.title}</p>
          </a>`;
        feed.appendChild(video);
      });
    }
  }
});
*/

console.log("ABCDBASDASDASDLKAJSDLKAJSDLKAJSDLKASJDLKASJDKLASJDKLASJDKALSJDALKSJDALSK");
const feed = document.querySelector('#contents');
if(feed) {
    feed.innerHTML = ''; //Clear existing feed
    console.log("Cleared Field");

    const video = document.createElement('div');
    video.innerHTML = `
        <a href="https://www.youtube.com/watch?v=Yx104rVo_Dw" target="_blank">
            <img src="" alt="This is a video" />
            </p>This is a video</p>
        </a>
    `;
    feed.appendChild(video);
}