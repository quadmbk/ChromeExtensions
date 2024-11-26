/*Store the state of the butons in the local storage*/
let dictionary = {};
let MESSAGE = {
  home_feed_state: false,
  side_panel_state: false,
  video_page_state: false
};

function send2Context(key, value) {
  //create message
  let msg;
  if(key == 'home_feed_state') {
    msg = {
      'home_feed_state': value
    }
  } else if (key == 'side_panel_state') {
    msg = {
      'side_panel_state': value
    }

  } else if (key == 'video_page_state') {
    msg = {
      'video_page_state': value
    }

  }
  
   MESSAGE[key] = value;
  //get active tab and sendMessage
  let queryInfo = { active: true, lastFocusedWindow: true};
  chrome.tabs.query(queryInfo, (tab) => {
    chrome.tabs.sendMessage(tab[0].id, msg);
  });
  chrome.storage.local.set({'MESSAGE': MESSAGE});
}

//On document loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('in content loaded')
  chrome.storage.local.get('MESSAGE', (data) => {
    const r = JSON.stringify(data);
    console.log(`MESSAGE IN MEMORY: ${r}`);
    const home_feed = document.getElementById('home-feed-optimiser');
    const side_feed = document.getElementById('side-panel-optimiser');
    const video_feed = document.getElementById('video-page-optimiser');

    home_feed.checked = data["MESSAGE"]['home_feed_state'] || false;
    side_feed.checked = data["MESSAGE"]['side_panel_state'] || false;
    video_feed.checked = data["MESSAGE"]['video_page_state'] || false;
   // console.log(`Setting home feeed state: ${home_feed.checked} mem: `)
    //console.log(data["MESSAGE"]["home_feed_state"]);
    send2Context('home_feed_state', home_feed.checked);
    send2Context('side_panel_state', side_feed.checked);
    send2Context('video_page_state', video_feed.checked);
    
  });
});
document.getElementById('home-feed-optimiser').addEventListener('change', async (e) => {
  var home_feed_state = false;
  if(e.target.checked) {
    home_feed_state = true;
    console.log("home feed button is checked.")
  } else {
    home_feed_state = false;
    console.log("home feed button is not checked.")
  }

  dictionary['home_feed_state'] = home_feed_state;
  send2Context('home_feed_state', home_feed_state);
})

document.getElementById('side-panel-optimiser').addEventListener('change', async (e) => {
  var side_panel_state = false;
  if(e.target.checked) {
    side_panel_state = true;
    console.log("side-panel-optimiser is checked.")
  } else {
    side_panel_state = false;
    console.log("side-panel-optimiser not checked.")
  }

  dictionary['side_panel_state'] = side_panel_state;
  send2Context('side_panel_state', side_panel_state);
})

document.getElementById('video-page-optimiser').addEventListener('change', async (e) => {
  var video_pg_state = false;
  if(e.target.checked) {
    video_pg_state = true;
    console.log("video-page-optimiser button is checked.")
  } else {
    video_pg_state = false;
    console.log("video-page-optimiser button is not checked.")
  }

  dictionary["video_pg_state"] = video_pg_state;
 /*   (async () => {
    const response = await chrome.tabs.sendMessage(tab.id,{dict: dictionary});
    console.log("In popop log: "+ response);
  })();
  chrome.storage.local.set({dictionary}, () => {
    console.log('options saved.');
  });*/
  send2Context('video_page_state', video_pg_state);
})


document.getElementById("btn").addEventListener('click', async(e) => {
  console.log(dictionary);

})

//Document listener is not there at the moment. So commenting it
/*document.getElementById('resetBtn').addEventListener('click', async () => {
    const keywords = document.getElementById('keywords').value;
    
    if (keywords.trim()) {
      chrome.storage.local.set({ keywords }, () => {
        alert('Keywords saved. Reload YouTube to see the updated feed.');
      });
    } else {
      alert('Please enter valid keywords.');
    }
  });
*/