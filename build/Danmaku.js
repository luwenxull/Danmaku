import { randomUniform } from 'd3-random';
import { select } from 'd3-selection';
import { DanmakuLine } from './Line';
export class Danmaku {
    constructor() {
        this.lineHeight = 20;
    }
    setStage(stage) {
        this.stage = stage;
        const stageSelection = select(stage);
        const rect = stage.getBoundingClientRect();
        const lineNum = Math.floor(rect.height / this.lineHeight);
        let i = 0;
        while (i < lineNum) {
            this.lines.push(new DanmakuLine(i * this.lineHeight));
            i += 1;
        }
        return this;
    }
    addText(text) {
        const r = Math.floor(randomUniform(0, this.lines.length)());
        console.log(r);
    }
}
