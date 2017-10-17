import { Danmaku, IDanmaku } from '../src/Danmaku'
const danmaku = new Danmaku()
danmaku.setStage(document.getElementById('test'))
danmaku.addText('hello world')
document.getElementById('add').addEventListener('click', () => {
  danmaku.addText('系统报警！系统报警')
})
