export interface IDanmaku {
    setStage(stage: HTMLElement): IDanmaku;
    addText(text: string): any;
}
export declare class Danmaku implements IDanmaku {
    private stage;
    private lineHeight;
    private lines;
    private _activeLines;
    private rect;
    private randomLineIndexGenerator;
    constructor();
    setStage(stage: HTMLElement): IDanmaku;
    addText(text: string): void;
}
