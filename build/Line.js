import { RectNode } from 'color-text';
import { transition } from 'd3-transition';
transition(null);
export class DanmakuLine {
    constructor(startPostion, direction = 'TOLEFT') {
        this.startPosition = startPostion;
        this.direction = direction;
    }
    shot(stage, text, rect) {
        const node = new RectNode();
        let g = stage.append('g')
            .style('transform', `translate(0, ${this.startPosition}px)`).style('transition', '10s linear');
        const start = rect.width;
        node.show(g.node(), {
            corner: [start, 0],
            text,
        }, {
            bg: {
                fill: '#FFB74D',
                rx: 4,
                ry: 4,
            },
            text: {},
        });
        const rectSize = node.getPaintRect();
        const end = -rectSize.width;
        const distance = end - start;
        g.style('transform', `translate(${distance}px, ${this.startPosition}px)`);
        setTimeout(() => {
            g.remove();
            g = null;
        }, 10000);
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
        return this;
    }
    init() {
    }
}
