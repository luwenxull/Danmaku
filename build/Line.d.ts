import { Selection } from 'd3-selection';
export declare type DanmakuLineDirection = 'TOLEFT' | 'TORIGHT' | 'TOBOTTOM' | 'TOTOP';
export interface IDanmakuLine {
    shot(stage: Selection<SVGElement, any, SVGElement, any>, text: string): IDanmakuLine;
}
export declare class DanmakuLine implements IDanmakuLine {
    private startPosition;
    private direction;
    constructor(startPostion: number, direction?: DanmakuLineDirection);
    shot(stage: Selection<SVGElement, any, SVGElement, any>, text: string): IDanmakuLine;
    private init();
}
