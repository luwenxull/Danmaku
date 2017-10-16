export interface IDanmaku {
    setStage(stage: SVGElement): IDanmaku;
    addText(text: string): any;
}
export declare class Danmaku implements IDanmaku {
    private stage;
    private lineHeight;
    private lines;
    constructor();
    setStage(stage: SVGElement): IDanmaku;
    addText(text: string): void;
}
