import { randomUniform, RandomUniform } from 'd3-random'
import { select, Selection } from 'd3-selection'
import { DanmakuLine, IDanmakuLine} from './Line'

export interface IDanmaku {
  setStage(stage: HTMLElement): IDanmaku
  addText(text: string)
}

export class Danmaku implements IDanmaku {
  private stage: Selection<SVGGElement, any, any, any>
  private lineHeight: number
  private lines: IDanmakuLine[]
  private _activeLines: number[]
  private rect: ClientRect
  private randomLineIndexGenerator: () => number
  constructor() {
    this.stage = null
    this.lineHeight = 35
    this.lines = []
    this._activeLines = []
    this.rect = null
    this.randomLineIndexGenerator = null
  }

  public setStage(stage: HTMLElement): IDanmaku {
    this.stage =
      select(stage).append('g').attr('data-name', 'danmaku-root') as Selection<SVGGElement, any, any, any>
    const rect = stage.getBoundingClientRect()
    const lineNum = Math.floor(rect.height / this.lineHeight)
    let i = 0
    while (i < lineNum) {
      this.lines.push(new DanmakuLine(i * this.lineHeight))
      i += 1
    }
    this.rect = rect
    this.randomLineIndexGenerator = randomUniform(0, i)
    return this
  }

  public addText(text: string) {
    const len = this.lines.length
    const _len = this._activeLines.length
    let r = Math.floor(this.randomLineIndexGenerator())
    if (_len < len) {
      while (this._activeLines.indexOf(r) > -1) {
        r = Math.floor(this.randomLineIndexGenerator())
      }
      this._activeLines.push(r)
    } else {
      r = this._activeLines[0]
      this._activeLines = this._activeLines.slice(1).concat(r)
    }

    this.lines[r].shot(this.stage, text, this.rect)
  }
}
