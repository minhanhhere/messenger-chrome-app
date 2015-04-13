(function() {

    var webview = document.querySelector('#webview');
    var progress = document.querySelector('#progress');

    webview.addEventListener('loadstop', function() {
        progress.style.display = 'none';
    });

    function updateWebview() {
        webview.style.height = document.documentElement.clientHeight + "px";
        webview.style.width = document.documentElement.clientWidth + "px";
        webview.focus();
    };

    window.onload = updateWebview;
    window.onresize = updateWebview;

    webview.addEventListener('contentload', function() {
        webview.executeScript({ file: 'inject.js' });
    });

    /* listen to webview console log and trigger some command if needed*/
    webview.addEventListener('consolemessage', function(e) {
        var msg = e.message;
        var url = msg.replace('chrome_messenger_ask_for_url:', '');
        window.open(url);
    });

    function focusWebview() {
        webview.focus();
    };

    window.onfocus = focusWebview;

})()