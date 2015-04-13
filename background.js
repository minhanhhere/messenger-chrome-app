chrome.app.runtime.onLaunched.addListener(function() {
    runApp();
});

chrome.app.runtime.onRestarted.addListener(function() {
    runApp();
});

function runApp() {
    chrome.app.window.create('window.html', {
        id: 'com_mar_messenger',
        innerBounds: {
            'width': 800,
            'height': 540
        },
        state: 'normal',
        //resizable: false,
        focused: true
    });
}