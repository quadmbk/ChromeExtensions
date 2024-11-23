Reset YT recommendations.

Often times, we start watching a video and end up watching a series of videos related to something else.
This ends up, corrupting the youtube recommendation on the home feed. 

This app, accepts a list of keywords that the user is interested in watching videos of.
When, the "reset" button is clicked the user's home feed is replaced by a list of videos related to the keywords entered and the user is expected to watch those. 


Features
--------
1. A "Reset" toggle switch, if enabled, replaces the users' YT home feed with only videos related to the keywords mentioned in the keywords list


Implementation
--------------
Phase1
~~~~~~
  1. Create a button which when enabled, hides all the videos in the user homefeed
  2. Only show a video(static url), later it will be list of videos fetched by the youtube API
