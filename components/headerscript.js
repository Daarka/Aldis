// Simple fetch and insert
        fetch('/components/header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            });

// Simple fetch and insert
        fetch('/components/WIP.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('WIP').innerHTML = data;
            });
