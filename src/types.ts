export type Frame = {
    readonly ctx: CanvasRenderingContext2D;
    readonly width: number;
    readonly height: number;
    readonly deltaTime: number;
    readonly totalTime: number;
};

export interface Render {
    render(frame: Frame): void;
}
