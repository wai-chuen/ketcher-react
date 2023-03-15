export default ReSGroup;
declare class ReSGroup extends ReObject {
    static isSelectable(): boolean;
    constructor(sgroup: any);
    item: any;
    draw(remol: any, sgroup: any): any;
    render: any;
    getTextHighlightDimensions(padding?: number): {
        startX: number;
        startY: number;
        width: number;
        height: number;
    };
    makeSelectionPlate(restruct: any, paper: any, options: any): any;
    drawHover(render: any): void;
    show(restruct: any): void;
}
import ReObject from "./reobject";
