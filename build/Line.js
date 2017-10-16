import { RectNode } from 'color-text';
export class DanmakuLine {
    constructor(startPostion, direction = 'TOLEFT') {
        this.startPosition = startPostion;
        this.direction = direction;
    }
    shot(stage, text) {
        const node = new RectNode();
        const g = stage.append('g');
        g.transition('shot');
        node.show(g.node(), {
            corner: [0, 0],
            text,
        });
        return this;
    }
    init() {
    }
}
