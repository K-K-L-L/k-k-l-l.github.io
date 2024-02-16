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

    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    // Initially hide the nav-list
    navList.classList.add('hidden');

    menuToggle.addEventListener('click', function () {
        // Toggle 'hidden' class instead of 'show'
        navList.classList.toggle('hidden');
    });
});
