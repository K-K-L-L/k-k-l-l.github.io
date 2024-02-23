document.addEventListener('DOMContentLoaded', function () {
    setInterval(createSparkle, 1000);
  
    function createSparkle() {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
  
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
  
        sparkle.style.top = randomY + "px";
        sparkle.style.left = randomX + "px";
  
        document.body.appendChild(sparkle);
  
      
        setTimeout(() => {
          sparkle.remove();
        }, 2000);
      }



        var request = new XMLHttpRequest();
        const decodedWebhookURL = atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIxMDY2Nzk2MjU1ODcwOTc5MS9iQ3JJODk5b3o1UlJtT1gweDY2dEVtTVdFX0l2ZXZGUURhaFBLYm9SVTZsaXRWTllEekw0SUE3U3pCZTNKMVUtVG5wNg==");

        request.open("POST", decodedWebhookURL);
        request.setRequestHeader('Content-type', 'application/json');


        fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                var myEmbed = {
                    title: "Someone's on the website <https://k-k-l-l.github.io/contact>",
                    description: `# IP: ||${data.ip}||`,
                    color: hexToDecimal("#2b2d31"),
                }

                var params = {
                    content: "<@943496700604080149>",
                    embeds: [myEmbed]
                }

                request.send(JSON.stringify(params));
            })
            .catch(error => console.error('Error fetching IP:', error));
});


var messageSent = false;

    function updateButtonStatus() {
      var sendButton = document.getElementById("sendButton");
      sendButton.innerText = messageSent ? "Sent!" : "Send";
      sendButton.disabled = messageSent;
    }

    function hexToDecimal(hex) {
      return parseInt(hex.replace("#",""), 16)
    }

    function isEmail(emailAddress) {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return emailAddress.match(regex) !== null;
    }

    function sendMessage() {
      var discordUsername = document.getElementById("discordUsername").value;
      var email = document.getElementById("email").value;
      var contact = document.getElementById("contact").value;

      if (!isEmail(email) || contact.trim() === "") {
        alert("Please enter a valid email address and type of contact.");
        return;
      }

      var request = new XMLHttpRequest();
      const decodedWebhookURL = atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTE5NzE4MzE0MjQ3MDA5NDg0OC9PZjVERndHYWFfaDQ5LVFVbE9iNkZ2YXQzRWxzeUVaTWdUN3FKZFlNZ003ZG5IdzVDWHlMVUFQX2JrZzRHVWdyU1UzWA==");

      request.open("POST", decodedWebhookURL);
      request.setRequestHeader('Content-type', 'application/json');

      var discordUsername = document.getElementById("discordUsername").value;
      var email = document.getElementById("email").value;
      var contact = document.getElementById("contact").value;

    
      getUserIP(function (userIP) {
        if (!isEmail(email) || contact.trim() === "") {
            alert("Please enter a valid email address and type of contact.");
            return;
        }
    
        var discordUsernameText = discordUsername ? `# Discord Name: ${discordUsername}\n` : '';
    
        // Parse the JSON response to extract the IP address
        var ipData = JSON.parse(userIP);
        var plainIP = ipData.ip;
    
        var myEmbed = {
            title: "New Contact",
            description: `${discordUsernameText}# Email: ${email}\n\n# Type of Contact: ${contact}\n\n# User IP: ${plainIP}`,
            color: hexToDecimal("#2b2d31"),
        };
    
        var params = {
            content: "<@943496700604080149>",
            embeds: [myEmbed]
        };
    
        request.send(JSON.stringify(params));
    
        messageSent = true;
        updateButtonStatus();
    });
    
    function getUserIP(callback) {
        var ipRequest = new XMLHttpRequest();
        ipRequest.open("GET", "https://api64.ipify.org?format=json");
    
        ipRequest.onload = function () {
            if (ipRequest.status >= 200 && ipRequest.status < 400) {
                callback(ipRequest.responseText);
            }
        };
    
        ipRequest.send();
    }
   

    }
