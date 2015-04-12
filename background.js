chrome.app.runtime.onLaunched.addListener(function() {
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
});