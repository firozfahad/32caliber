document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('main p');
    setInterval(function() {
        mainContent.style.visibility = (mainContent.style.visibility === 'hidden' ? '' : 'hidden');
    }, 500); // Blinks every 500ms
});
