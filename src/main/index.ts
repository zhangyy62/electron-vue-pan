/* eslint-disable */
'use strict'
import { app, BrowserWindow, Menu, screen, ipcMain } from 'electron'
import '../renderer/store';
 /* tslint:disable */ 
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */

declare var global: any

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow, floatingWindows, session, fileDownloadWindow;
let template = [];

const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080/#/home/all/table`
    : `file://${__dirname}/index.html`;

const floatingWinURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080/#/floating/window`
  : `file://${__dirname}/index.html`

const downloadDemoURL = process.env.NODE_ENV === 'development'
? `http://localhost:9080/#/downloaddemo`
: `file://${__dirname}/index.html`


function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 650,
    useContentSize: true,
    width: 1000,
    minWidth: 960,
    minHeight: 650
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  if (floatingWindows) floatingWindows.close()
  session = mainWindow.webContents.session;
  console.log('main sesson:' + mainWindow.webContents.session);
}
console.log(app.getVersion())
console.log(process.versions)
app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

 template = [
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteandmatchstyle' },
      { role: 'delete' },
      { role: 'selectall' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electronjs.org') }
      }
    ]
  },
  {
    label: '自主测试',
    submenu: [
      {
        label: '悬浮框',
        click () { 
          mainWindow.close()
          floatingWindows = new BrowserWindow({
            width: 140, //悬浮窗口的宽度 比实际DIV的宽度要多2px 因为有1px的边框
            height: 30, //悬浮窗口的高度 比实际DIV的高度要多2px 因为有1px的边框
            type: 'toolbar',    //创建的窗口类型为工具栏窗口
            frame: false,   //要创建无边框窗口
            // resizable: false, //禁止窗口大小缩放
            show: false,    //先不让窗口显示
            webPreferences: {
                devTools: false //关闭调试工具
            },
            transparent: true,  //设置透明
            alwaysOnTop: true,  //窗口是否总是显示在其他窗口之前
          });
          const size = screen.getPrimaryDisplay().workAreaSize;   //获取显示器的宽高
          const winSize = floatingWindows.getSize();  //获取窗口宽高
      
          //设置窗口的位置 注意x轴要桌面的宽度 - 窗口的宽度
          floatingWindows.setPosition(size.width - winSize[0], 100);
          floatingWindows.loadURL(floatingWinURL);
      
          floatingWindows.once('ready-to-show', () => {
            floatingWindows.show()
          });
      
          floatingWindows.on('close', () => {
            floatingWindows = null;
          })
        }
      },
      {
        label: '下载文件',
        click () {
          // mainWindow.webContents.downloadURL('https://speed.hetzner.de/10GB.bin');
          // mainWindow.close();
          // console.log('sesson: ' + mainWindow.webContents.sesson)
          // // fileDownload.test();
          fileDownloadWindow = new BrowserWindow({
            height: 300,
            useContentSize: true,
            width: 600
          });
          fileDownloadWindow.loadURL(downloadDemoURL);
          fileDownloadWindow.on('closed', () => {
            fileDownloadWindow = null
          })
          console.log('sesson: ' + session)
          // var fileDownload = new FileDownload(fileDownloadWindow.webContents);
          ipcMain.on('passDownlaod-message', (event, arg) => {
            console.log('passDownlaod-message');
            // Event emitter for sending asynchronous messages
            // console.log('111' + fileDownload.test())
            event.sender.send('passDownload-reply')
            // event.returnValue = fileDownload
          });
        }
      }
    ]
  },
]

ipcMain.on('showMainWindow', () => {
    floatingWindows.close();
    createWindow();
});

ipcMain.on('downloadFile', () => {
  floatingWindows.close();
  createWindow()
});




/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
