document.addEventListener("DOMContentLoaded", function() {
    const links = [
        { url: 'https://github.com/K-K-L-L', text: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/128/11337/11337513.png' },
        { url: 'https://discord.com/users/943496700604080149', text: 'Discord (rayan1545#0)', icon: 'https://cdn-icons-png.flaticon.com/128/2582/2582637.png' },
        { url: 'https://steamcommunity.com/profiles/76561198851444409', text: 'Steam', icon: 'https://img.icons8.com/?size=50&id=12465&format=png'}
    ];

    const container = document.getElementById('container');

    links.forEach(link => {
        const linkElement = document.createElement('div');
        linkElement.className = 'link';

        const anchorElement = document.createElement('a');
        anchorElement.href = link.url;
        anchorElement.target = '_blank';

        // Create a div for the icon
        const iconContainer = document.createElement('div');
        iconContainer.className = 'icon';

        // Load icon from the provided URL
        const iconElement = document.createElement('img');
        iconElement.src = link.icon;

        // Create a span for the text
        const textElement = document.createElement('span');
        textElement.appendChild(document.createTextNode(link.text));

        // Append the icon and text to the anchor element
        iconContainer.appendChild(iconElement);
        anchorElement.appendChild(iconContainer);
        anchorElement.appendChild(textElement);

        // Append the anchor element to the link container
        linkElement.appendChild(anchorElement);
        container.appendChild(linkElement);
    });

    function hexToDecimal(hex) {
        return parseInt(hex.replace("#",""), 16)
      }
    
    var request = new XMLHttpRequest();
        const decodedWebhookURL = atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIxMDY2Nzk2MjU1ODcwOTc5MS9iQ3JJODk5b3o1UlJtT1gweDY2dEVtTVdFX0l2ZXZGUURhaFBLYm9SVTZsaXRWTllEekw0SUE3U3pCZTNKMVUtVG5wNg==");

        request.open("POST", decodedWebhookURL);
        request.setRequestHeader('Content-type', 'application/json');


        fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                var myEmbed = {
                    title: "Someone's on the website <https://k-k-l-l.github.io/links>",
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
