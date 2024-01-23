document.addEventListener("DOMContentLoaded", function() {
    const links = [
        { url: 'https://github.com/K-K-L-L', text: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/128/11337/11337513.png' },
        { url: 'https://discord.com/users/1108308460153602138', text: 'Discord', icon: 'https://cdn-icons-png.flaticon.com/128/2582/2582637.png' }
    ];

    const container = document.getElementById('container');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const profileImage = document.getElementById('profileImage');

    document.body.classList.add('dark-theme');


    themeToggleBtn.addEventListener('click', function() {
        toggleTheme();
    });

    function toggleTheme() {
        isDark = !isDark;

        if (isDark) {
            document.body.style.backgroundColor = '#f0f0f0';
            document.getElementById('container').style.backgroundColor = "#ffffff";
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

        const iconContainer = document.createElement('div');
        iconContainer.className = 'icon';

        const iconElement = document.createElement('img');
        iconElement.src = link.icon;

        const textElement = document.createElement('span');
        textElement.appendChild(document.createTextNode(link.text));

        iconContainer.appendChild(iconElement);
        anchorElement.appendChild(iconContainer);
        anchorElement.appendChild(textElement);

        linkElement.appendChild(anchorElement);
        container.appendChild(linkElement);
    });
});
