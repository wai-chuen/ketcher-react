import { Vec2 } from 'ketcher-core';
export declare function isCloseToEdgeOfScreen(event: any): {
    isCloseToLeftEdgeOfScreen: boolean;
    isCloseToTopEdgeOfScreen: boolean;
    isCloseToRightEdgeOfScreen: boolean;
    isCloseToBottomEdgeOfScreen: boolean;
};
export declare function isCloseToEdgeOfCanvas(event: any, canvasSize: any): {
    isCloseToLeftEdgeOfCanvas: boolean;
    isCloseToTopEdgeOfCanvas: boolean;
    isCloseToRightEdgeOfCanvas: boolean;
    isCloseToBottomEdgeOfCanvas: boolean;
};
export declare function calculateCanvasExtension(clientArea: any, currentCanvasSize: any, extensionVector: any): Vec2;
export declare function shiftAndExtendCanvasByVector(vector: Vec2, render: any): void;
export declare function scrollByVector(vector: Vec2, render: any): void;
