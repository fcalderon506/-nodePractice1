const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', creaWindow);

function creaWindow(){
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadFile('index.html');
}

