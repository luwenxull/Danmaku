import { Danmaku, IDanmaku } from '../src/Danmaku'
const danmaku = new Danmaku()
danmaku.setStage(document.getElementById('test'))
danmaku.addText('hello world')
