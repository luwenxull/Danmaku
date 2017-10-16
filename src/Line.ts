import { INode, RectNode } from 'color-text'
import { easeLinear } from 'd3-ease'
import { select, Selection } from 'd3-selection'
import { transition } from 'd3-transition'
transition(null)

export type DanmakuLineDirection = 'TOLEFT' | 'TORIGHT' | 'TOBOTTOM' | 'TOTOP'

export interface IDanmakuLine {
  shot(stage: Selection<SVGElement, any, any, any>, text: string, rect: ClientRect): IDanmakuLine
}

export class DanmakuLine implements IDanmakuLine {
  private startPosition: number
  private direction: DanmakuLineDirection
  constructor(
    startPostion: number,
    direction: DanmakuLineDirection = 'TOLEFT',
  ) {
    this.startPosition = startPostion
    this.direction = direction
  }

  public shot(stage: Selection<SVGElement, any, any, any>, text: string, rect: ClientRect): IDanmakuLine {
    const node: INode = new RectNode()
    const g = stage.append('g')
    const start = rect.width
    node.show(g.node() as SVGElement, {
      corner: [start, 0],
      text,
    })
    const rectSize = node.getPaintRect()
    const end = -rectSize.width
    const distance = end - start
    g.transition('shot')
      .ease(easeLinear)
      .duration(7000)
      .attrTween('transform', () => {
        return (t) => {
          return `translate(${t * distance}, ${this.startPosition})`
        }
      })
    return this
  }

  private init() {

  }

}
