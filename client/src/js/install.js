const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    console.log('Before Install Prompt');
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    console.log('Install Button Clicked!');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        console.log('Install Cancelled!');
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    console.log('Installed!');
    window.deferredPrompt = null;
});


