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
      const decodedWebhookURL = atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTE5NjQ0MTcwMjY5Nzc5OTc2MS9HcGZxbVFjc25Kd2VtMTFHRU1ISmNEWTJMNzJOZkItLXRfY1RrcWF0UFp5d3UtMUd1VWNVNGFfVHVIR1JFWmxjTHRXVQ==");

      request.open("POST", decodedWebhookURL);
      request.setRequestHeader('Content-type', 'application/json');

      var discordUsernameText = discordUsername ? `# Discord Name: ${discordUsername}\n` : '';
      
      var myEmbed = {
        title: "New Contact",
        description: `${discordUsernameText}# Email: ${email}\n\n# Type of Contact: ${contact}`,
        color: hexToDecimal("#2b2d31"),
      }
      
      var params = {
        content: "<@943496700604080149>",
        embeds: [myEmbed]
      }

      request.send(JSON.stringify(params));

      messageSent = true;
      console.log("sent... ig?");
      updateButtonStatus();
    }
