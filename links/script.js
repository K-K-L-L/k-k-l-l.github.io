document.addEventListener("DOMContentLoaded", function() {
    const links = [
        { url: 'https://github.com/K-K-L-L', text: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/128/11337/11337513.png' },
        { url: 'https://discord.com/users/1108308460153602138', text: 'Discord', icon: 'https://cdn-icons-png.flaticon.com/128/2582/2582637.png' },
        { url: 'https://steamcommunity.com/profiles/76561198851444409', text: 'Steam', icon: 'https://img.icons8.com/?size=50&id=12465&format=png'}
    ];

    const container = document.getElementById('container');
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    // Set initial dark theme
    document.body.classList.add('dark-theme');

    // Add an event listener to the theme toggle button
    let isDark = false; // Initialize as false since you start with the light theme
    // document.container.style.backgroundColor = "#ffffff";
    themeToggleBtn.addEventListener('click', function() {
        toggleTheme();
    });

    // Function to toggle between light and dark themes
    function toggleTheme() {
        // Toggle the value of isDark
        isDark = !isDark;

        if (isDark) {
            document.body.style.backgroundColor = '#f0f0f0';
            // document.link.backgroundColor = "#a3a3a3";
            document.getElementById('container').style.backgroundColor = "#ffffff";
            // document.container.style.backgroundColor = "#1e1e1e";
        } else {
            document.body.style.backgroundColor = '#121212';
            document.getElementById('container').style.backgroundColor = "#1e1e1e";
        }

        document.body.classList.toggle('dark-theme');
        container.classList.toggle('dark-theme-container');
    }

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
});
