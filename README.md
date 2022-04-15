<p align="center">
  <img src="https://user-images.githubusercontent.com/11009228/163631371-7854a786-490b-447f-91f4-af1687393df2.png" width="256" alt="NoShorts Icon" /></a>
  <p align="center">Chromium extension to replace the YouTube Shorts URL with a standard YouTube video URL</p>
</p>


## Functionality
Replaces the "shorts/" URL path with "watch?v="

## Permissions
The application only requires the necessary `tabs` permission
* Only queries tabs where URLs match: "\*://\*.youtube.com/shorts/\*"
* Only fired when the extension icon is clicked or a tab is updated.  