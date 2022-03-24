var electron = require('electron')
var app = electron.app
var  globalShortcut = electron.globalShortcut
var mainWindow = null

var  BrowserWindow = electron.BrowserWindow


app.on('ready', ()=> {
  mainWindow = new BrowserWindow({ 
    width: 500, 
    height: 500,
    webPreferences: { 
      nodeIntegration: true, 
      contextIsolation: false,
      enableRemoteModule: true
    }
  })
  mainWindow.webContents.openDevTools()
  globalShortcut.register('ctrl+e', () => {
    mainWindow.loadURL('https://jspang.com')
  })
  let isRegister = globalShortcut.isRegistered('ctrl+e') ? 'Yes' : 'No'
  console.log('isRegister', isRegister);

  // var BrowserView = electron.BrowserView //引入BrowserView
  // var view = new BrowserView()   //new出对象  
  // mainWindow.setBrowserView(view)   // 在主窗口中设置view可用
  // view.setBounds({x:0,y:100,width:1200, height:800})  //定义view的具体样式和位置
  // view.webContents.loadURL('https://jspang.com')  //wiew载入的页面
  
  // require('./main/menu.js')
  mainWindow.loadFile('demo7.html')
  mainWindow.on('closed', ()=> {
    mainWindow = null
  })
})

app.on('will-quit', ()=> {
  globalShortcut.unregister('ctrl+e')
  globalShortcut.unregisterAll()
})