const welcomeTemplates = `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Storage API</title>
    <style>
      @font-face {
        font-family: 'Welcome';
        font-style: normal;
        font-weight: 400;
        src: local('Welcome'), url('https://fonts.cdnfonts.com/s/26488/Welcome.woff') format('woff');
      }
      
      body {
        background-color: black;
        color: white;
        margin: 0;
        padding: 0;
      }

      .main-content {
        width: 100%;
        height: 100%;
      }

      .custom-font {
        font-family: 'Welcome', Courier, serif;
        font-display: swap;
        font-weight: 400;
      }

      .text-box {
        height: 100vh;
        background-position: center center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #000 !important;
        flex-direction: column;
      }

      .text-box .shadow {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 40%, rebeccapurple 300%);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .text-box .text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        padding: 40px;
        width: calc(100% - 80px);
        height: calc(100% - 80px);
        opacity: 0;
        -webkit-animation: trim2 5s ease forwards;
        animation: trim2 5s ease-in-out forwards;
      }

      .text-box .text > * {
        text-align: center;
      }

      .text-box .text p {
        font-size: 35px;
        color: #aaa;
        margin-bottom: 0;
      }
      
      .text-box .text p.world-map {
        color: azure;
      }

      .text-box .text h1 {
        margin: 0;
        font-size: 200px;
        font-weight: 100;
      }

      @-webkit-keyframes trim2 {
        to {
          opacity: 1;
        }
      }

      @keyframes trim2 {
        to {
          opacity: 1;
        }
      }
    </style>
  </head>
  <body>
    <div class="main-content">
      <div class="text-box custom-font">
        <div class="shadow"></div>
        <div class="text">
          <p class="world-map">🗺</p>
          <p>Hello this is an API service</p>
          <h1>Welcome</h1>
          <p>
            “<i>To access the endpoints, you need to contact support.</i>”
            <br />Web Api
          </p>
        </div>
      </div>
    </div>
  </body>
</html>

`;

module.exports = welcomeTemplates;
