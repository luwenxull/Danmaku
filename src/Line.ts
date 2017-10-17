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
    let g = stage.append('g')
      .style('transform', `translate(0, ${this.startPosition}px)`).style('transition', '10s linear')
    const start = rect.width
    node.show(g.node() as SVGElement, {
      corner: [start, 0],
      text,
    }, {
      bg: {
        fill: '#FFB74D',
        rx: 4,
        ry: 4,
      },
      text: {

      },
    })
    const rectSize = node.getPaintRect()
    const end = -rectSize.width
    const distance = end - start
    g.style('transform', `translate(${distance}px, ${this.startPosition}px)`)
    setTimeout(() => {
      g.remove()
      g = null
    }, 10000)
    /*g.transition('shot')
      .ease(easeLinear)
      .duration(10000)
      .styleTween('transform', () => {
        return (t) => {
          return `translate(${t * distance}px, ${this.startPosition}px)`
        }
      })
      .on('end', () => {
        // g.remove()
      })*/
    return this
  }

  private init() {

  }

}
