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
      request.open("POST", "https://discord.com/api/webhooks/1196441702697799761/GpfqmQcsnJwem11GEMHJcDY2L72NfB--t_cTkqatPZywu-1GuUcU4a_TuHGREZlcLtWU");
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
      updateButtonStatus();
    }
