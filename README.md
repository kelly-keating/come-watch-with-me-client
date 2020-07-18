# Come Watch With Me - Client

This project was started in an effort to let me and my girlfriend watch videos at the same time.

This front end uses sockets.io to communicate with the remote server, starting and pausing playback across all connected clients.

To start the server run

```sh
npm i
npm run dev
```

The page will be available at http://localhost:3000 in your browser.

This client currently only has access to videos stored in the `public/videos` folder of this repo. Add any videos there if you wish to view them.

Server repo located at https://github.com/kelly-keating/come-watch-with-me-client
