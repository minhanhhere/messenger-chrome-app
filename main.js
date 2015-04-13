(function() {

    var webview = document.querySelector('#webview');
    var progress = document.querySelector('#progress');

    function hideLoading() {
        progress.style.display = 'none';
    }

    function updateWebview() {
        webview.style.height = document.documentElement.clientHeight + "px";
        webview.style.width = document.documentElement.clientWidth + "px";
        webview.focus();
    }    

    function injectScript() {
        webview.executeScript({ file: 'inject.js' });
    }

    function contain(parent, child) {
        return parent.indexOf(child) != -1;
    }

    /* listen to webview console log and trigger some command if needed*/
    function handleWebviewMessage(e) {
        var data = JSON.parse(e.message);
        if (data.cmd == 'open_url') {
            window.open(data.url);
        } else if (data.cmd == 'show_help') {
            var permission = data.permission;
            // if (permission == 'granted' || permission == 'denied') {
            //     // ask for instruction here
            //     var n = noty({
            //         text: 'To enable desktop notification, please click YES and follow the instructions',
            //         layout: 'topCenter',
            //         theme: 'relax',
            //         type: 'information',
            //         buttons: [
            //             {
            //                 addClass: 'btn btn-primary', text: 'YES',
            //                 onClick: function($noty) {
            //                     $noty.close();
            //                     window.open('https://www.google.com.vn');
            //                 }
            //             },
            //             {
            //                 addClass: 'btn btn-danger', text: 'NO',
            //                 onClick: function($noty) {
            //                     $noty.close();
            //                 }
            //             }
            //         ]
            //     });
            // }
        }
    }

    function focusWebview() {
        webview.focus();
    };

    window.onload = updateWebview;
    window.onresize = updateWebview;
    window.onfocus = focusWebview;

    webview.addEventListener('loadstop', hideLoading);
    webview.addEventListener('contentload', injectScript);
    webview.addEventListener('consolemessage', handleWebviewMessage);

})()