console.log("bobhb");
let home_feed = '';
let side_panel = '';
chrome.runtime.onMessage.addListener(
  (request,sender, sendResponse) => {
      r = JSON.stringify(request);
      keys = Object.keys(request);
      console.log(keys[0]);
      switch(keys[0]) {
        case "home_feed_state": 
          console.log("home feed state value: " + request[keys]);
          processHomeFeed(request[keys]);
          break;
        case 'side_panel_state': 
          processSidePanel(request[keys]);
          console.log("side panel state value: " + request[keys]);
          break;
        case 'video_page_state': 
          console.log("video page state value: " + request[keys]);
          break;
      }
      sendResponse({"hello": "hello"});
  }
);

function processHomeFeed(val) {
  if(val == true){
    //means hide
    const feed = document.querySelector('#contents');
    if(feed){
      home_feed = feed.innerHTML;
      feed.style.display = 'none';
    }
  } else {
    const feed = document.querySelector('#contents');
    console.log('In else: ' + feed.style.display)
    feed.style.display = '';
  }
}

function processSidePanel(val) {
  
    const feed = document.querySelectorAll('#items');
    if(feed) {
        for(i=0; i < feed.length; i++){
          if(feed[i].innerText.includes('Trending')){
              //console.log(feed[i])
              parent = feed[i].parentElement;
              side_panel = feed[i];
              if (val == true) {

                side_panel = feed[i].style.display;
                feed[i].style.display = 'none';
                console.log('in side panel: ' + side_panel);
              } else {
                feed[i].style.display = 'block';
              }
              //feed[i].innerHTML = '';
              break;
          }
      }
    }
  
}