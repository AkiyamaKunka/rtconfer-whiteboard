[![image](https://www.linkpicture.com/q/LOGO6.png)](https://www.linkpicture.com/view.php?img=LPic617768bc317c51963078982)

 ![](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge&logo=appveyor)

RTConfer is a Online Rich-Media Collaborative Whiteboard Platform.

Bring Teams Together, anywhere.

![Main Page](https://i.ibb.co/MkMcCQn/main-page.png)

## 1. Guide Book
[Click here for Developers' Guidebook!](https://www.yuque.com/docs/share/894368bd-aea0-4871-8ee1-92ecfa3ff202?#) 

## 2. Demo Video
 [Click Here for video on Youtube!](https://youtu.be/U80gxszblNo) 

## 3. Feature Hightlight

* Online video streaming in Group
* Real-time rich-media whiltboard collaboration
* Real-time code and rich-text editing
* File uploading & displaying
* Robust user and team organization

[![image](https://www.linkpicture.com/q/meeting-room.png)](https://www.linkpicture.com/view.php?img=LPic617769959bff31447176570)

## 4. Tech Outline

* Designed website with robust session security and multi-person video & audio call stability with Socket.IO based on WebSocket
* Applied MERN: MongoDB, Express.js RESTful API, React.js, Node.js, JWT authentication, Chakra UI with Heroku in development
* Implemented real-time collaborative code and rich-text editing with Firepad, file uploading with AliCloud Open Storage Service
* Integrated Google Real-time Firebase handling input conflicts, realizing message playback to client-side of code/text editing




# RTConfer : Deploy Locally

## 1. If you are a client who want to deploy our service or test:

Please follow the steps to deploy our web service as quickly as possible!

* git clone this repo to your computer, turn on your Windows shell or Unix Terminal command line tools.

* ```cd richmedia-project/client``` to enter the directory of our web demo project

* ```npm install``` to install all the dependencies that front-end needs, this might need to wait for a few seconds.

* ```npm run start``` to start the React.js serve. 

* Enter ```http://localhost:3000/welcome``` in your Chrome browser's URL bar.

* Simply wait for a few seconds, and enjoy your usage of our **RTConfer** platform!

  



## 2.If you are a engineer who wanna further development:

### Prerequisites:

Have Docker Installed in your System, and also a clear mind to follow these steps.

##### In Development Mode :

First copy the content of **docker-compose-dev.yml** to **docker-compose.yml**

and also copy the content of **server/src/index.dev.js** to **server/src/index.js**

Run the app using :

`$ docker-compose up --build --remove-orphans`

or

`$ docker-compose up -d`

Above command will start the services on (-d) detach mode (similar like running the app in background)

Then you can check the status of the containers by running:

`$ docker ps`

The App should be App :

visit client : http://localhost:3000

visit server : http://localhost:8080

To check the status of the running containers :

`docker-compose ps`

##### In Production Mode :

First copy the content of **docker-compose-prod.yml** to **docker-compose.yml**

and also copy the content of **server/src/index.prod.js** to **server/src/index.js**

Run the app using :

` $ docker-compose up --build -remove-orphans`

The App should be up at http://localhost:8080

### Build the image for server :

docker build -t myapp-server:1 .
docker images
docker run --name "myapp-server" -p 80:8080 myapp-server:1
docker ps



![MERN DOCKER diagram](https://github.com/sujaykundu777/mern-docker/blob/master/3-tier-diagram.png?raw=true)


#### Copyright @ Jisuanke Inc. & Group LucyRiver's Ice Tea @ School of Software, Nankai University



