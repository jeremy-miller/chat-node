[![Build Status](https://travis-ci.org/jeremy-miller/chat-node.svg?branch=master)](https://travis-ci.org/jeremy-miller/chat-node)
[![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jeremy-miller/chat-node/blob/master/LICENSE)
[![Node Version](https://img.shields.io/badge/Node-8.2-blue.svg)]()

# Chat
Chat server using Node.js and Socket.io.  This project is based on [this](https://socket.io/get-started/chat/) tutorial.

<details>
<summary><strong>Table of Contents</strong></summary>

* [Motivation](#motivation)
* [Usage](#usage)
  + [Prerequisites](#prerequisites)
  + [Build](#build)
  + [Lint](#lint)
  + [Run](#run)
* [License](#license)
</details>

## Motivation
I created this project to try:
- Using Javascript as a server-side language
- [Node.js](https://nodejs.org/en/) and its ecosystem
- Building a web server using [Express.js](https://expressjs.com/)
- Websockets (using [Socket.io](https://socket.io/))
- ES6

## Usage
This implementation uses a Docker container to isolate the execution environment.

### Prerequisites
- [Docker](https://docs.docker.com/engine/installation/)

### Build
Before viewing any solutions, the Docker container must be built: ```docker build -t jeremymiller/chat-node .```

### Lint
To run [ESLint](http://eslint.org/) on the Javascript files in the repository, execute the following command: ```docker run -it --rm jeremymiller/chat-node npm run-script lint```

### Run
1. To run the chat server by executing the following command: ```docker run -it --rm -p 3000:3000 jeremymiller/chat-node```
2. Connect to `http://localhost:3000` in your web browser
3. Begin chatting!

## License
[MIT](https://github.com/jeremy-miller/chat-node/blob/master/LICENSE)
