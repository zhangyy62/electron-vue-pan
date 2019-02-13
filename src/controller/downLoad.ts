const { session, webContents } = require('electron').remote;

class FileDownload {
    private filePath: string;
    private paused: boolean = false;
    private progressValue: number = 0;
    private totalBytes: number = 0;
    private receivedBytes: number = 0;

    constructor(value: number) {
        this.progressValue = value;
        this.bind();
    }

    private bind(): void {
        session.defaultSession.on('will-download', (event, item, webContents) => {
            // 设置保存路径,使Electron不提示保存对话框。
            console.log('/downloaded/'+ item.getFilename())
            console.log('path:'+ item.getURL())
            console.log(`total bytes: ${item.getTotalBytes()}`)
            this.totalBytes = item.getTotalBytes();

            item.on('updated', (event, state) => {
              this.paused ? item.pause() : item.resume();

              if (state === 'interrupted') {
                console.log('Download is interrupted but can be resumed')
              } else if (state === 'progressing') {
                if (item.isPaused()) {
                    console.log('Download is paused')
                } else {
                    this.receivedBytes = item.getReceivedBytes();
                    this.progressValue = +(item.getReceivedBytes() / item.getTotalBytes() * 100).toFixed(2);
                    console.log(`Received bytes: ${item.getReceivedBytes()}`)
                    console.log(`已下载占比: ${this.progressValue}%`)
                }
              }
            })
            item.once('done', (event, state) => {
              if (state === 'completed') {
                console.log('Download successfully')
              } else {
                console.log(`Download failed: ${state}`)
              }
            })
        })
    }

    public download(x: string) : any;
    public download(x): any {
        if (typeof x == "string") {
            webContents.getFocusedWebContents().downloadURL(x);            
        }
        else if (typeof x == 'undefined') {
            webContents.getFocusedWebContents().downloadURL(this.filePath);
        }
    }

    public pause(): void {
        this.paused = true;
    }

    public continue(): void{
        this.paused = false;
    }

    public test(): string {
        return 'renderer'
    }

    public getProgressValue(): number {
        return +(this.receivedBytes / this.totalBytes * 100).toFixed(2)
    }
}

export default FileDownload;