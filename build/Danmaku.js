import { randomUniform } from 'd3-random';
import { select } from 'd3-selection';
import { DanmakuLine } from './Line';
export class Danmaku {
    constructor() {
        this.stage = null;
        this.lineHeight = 35;
        this.lines = [];
        this._activeLines = [];
        this.rect = null;
        this.randomLineIndexGenerator = null;
    }
    setStage(stage) {
        this.stage =
            select(stage).append('g').attr('data-name', 'danmaku-root');
        const rect = stage.getBoundingClientRect();
        const lineNum = Math.floor(rect.height / this.lineHeight);
        let i = 0;
        while (i < lineNum) {
            this.lines.push(new DanmakuLine(i * this.lineHeight));
            i += 1;
        }
        this.rect = rect;
        this.randomLineIndexGenerator = randomUniform(0, i);
        return this;
    }
    addText(text) {
        const len = this.lines.length;
        const _len = this._activeLines.length;
        let r = Math.floor(this.randomLineIndexGenerator());
        if (_len < len) {
            while (this._activeLines.indexOf(r) > -1) {
                r = Math.floor(this.randomLineIndexGenerator());
            }
            this._activeLines.push(r);
        }
        else {
            r = this._activeLines[0];
            this._activeLines = this._activeLines.slice(1).concat(r);
        }
        this.lines[r].shot(this.stage, text, this.rect);
    }
}
