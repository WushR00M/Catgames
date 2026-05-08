document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Prevent browser save dialog
        console.log('Save shortcut triggered');
		window.location.replace("https://www.google.com");
    }
});
