import { randomUniform } from 'd3-random'
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
  private rect: ClientRect
  constructor() {
    this.stage = null
    this.lineHeight = 20
    this.lines = []
    this.rect = null
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
    return this
  }

  public addText(text: string) {
    const r = Math.floor(randomUniform(0, this.lines.length)())
    this.lines[r].shot(this.stage, text, this.rect)
  }
}
