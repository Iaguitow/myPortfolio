# myPortfolio
When I was looking for how to build my portfolio, I figured out that I would need to create a github and a website to show my projects. But, what if there is a mobile app where you can do that, and anyone can do the same. Then, the main goal of this app is provider a place to show your project and your CV, in an easy way.

# ScreenShots

<div style="display:flex">
  <img src="https://user-images.githubusercontent.com/39009386/158898538-663f3e22-fd81-4a4b-bd65-90d8580afc51.jpeg" height="400" />

  <img src="https://user-images.githubusercontent.com/39009386/158898543-1339a2bb-a4a7-4666-9a95-702f8121a795.jpeg" height="400" />

  <img src="https://user-images.githubusercontent.com/39009386/158898540-0dd213d6-08fc-4409-956a-1fdd95fb0baf.jpeg" height="400" />

  <img src="https://user-images.githubusercontent.com/39009386/158898537-469fb55b-9856-4312-822c-7ff762e6bdbf.jpeg" height="400" />

  <img src="https://user-images.githubusercontent.com/39009386/158898531-0a9119c3-0c48-4a9f-aa7b-6d09b3cd7f99.jpeg" height="400" />

  <img src="https://user-images.githubusercontent.com/39009386/158898533-092e9eb0-9ee2-4813-b2c6-cb0868b1e9bb.jpeg" height="400" />

  <img src="https://user-images.githubusercontent.com/39009386/158898536-2d139488-4030-4df1-a7d8-e029fd3484eb.jpeg" height="400" />
</div>

# Resources and Libraries

<ul>
  <li> 1 - "native-base": "^3.2.2", </li>
  <li> 2 - "react-redux": "^7.2.6", </li>
  <li> 3 - "expo-google-app-auth": "~8.3.0", </li>
  <li> 4 - "axios": "^0.24.0", </li>
  <li> 5 - "@react-navigation/drawer": "^6.1.8", </li>
  <li> 6 - "@react-navigation/native": "^6.0.6", </li>
  <li> 7 - "@react-navigation/native-stack": "^6.2.5", </li>
  <li> 8 - "@react-navigation/stack": "^6.0.11",, </li>
</ul>

# RUN THE PROJECT

<ul>
  <li> 1 - Install Yarn Package  </li>
  <li> 2 - yarn global add expo-cli  </li>
  <li> 3 - git clone https://github.com/iaguitow/myPortfolio  </li>
  <li> 4 - git clone https://github.com/Iaguitow/dbServerMyPortfolio.git  </li>
  <li> 5 - install nodejs </li>
  <li> 6 - install mysql and insert the follow script to create everything: (https://github.com/Iaguitow/myPortfolio/files/8292892/dbMyPortfolio-SCRIPT.txt)  </li>
  <li> 7 - Create a file called .env inside the project dbServerMyPortfolio and fillup the follow information:  </li>
    <ul>
      <li> DB_HOST = XXXXXX </li>
      <li> DB_USER = XXXXXX </li>
      <li> DB_PASSWORD = XXXXXXXXX </li>
      <li> DB_DATABASE = XXXXXXXXX </li>
      <li> DB_PORT = XXXXXXXXX </li>
      <li> LIST_PER_PAGE = XXXXXXXXX </li>
      <li> API_KEY = XXXXXXXXX </li>
      /**************IF YOU DONT HAVE A GDRIVER AND GMAIL API SERVICE LEAVE IT**************/
      <li> CLIENT_ID = XXXXXXXXX </li>
      <li> CLIENT_SECRET = XXXXXXXXX </li>
      <li> REDIRECT_URI = XXXXXXXXX </li>
      <li> REFRESH_TOKEN = XXXXXXXXX </li>
      <li> REFRESH_TOKEN_GDRIVE = XXXXXXXXX </li>
    </ul>
  <li> 8 - execute the command nodemon indexAPI.js inside of dbServerMyPortfolio project. </li>
  <li> 9 - execute the command expo start inside of myPortfolio project.  </li>
</ul>

# OTHER INFORMATION
I'm still working on this project. I hope finish it until august. It is only a project to "have fun" and learn something.






