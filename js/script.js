document.getElementById('joinButton').addEventListener('click', function() {
    document.getElementById('message').innerText = 'Welcome to Earn Online Now Community!';
    document.getElementById('message').style.color = 'green';
    
    // Redirect to platformprom.html after 2 seconds
    setTimeout(function() {
        window.location.href = 'platformprom.html';
    }, 2000); // 2 seconds delay
});