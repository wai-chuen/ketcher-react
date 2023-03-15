import { Action } from 'ketcher-core';
import Editor from '../../Editor';
declare type MergeItems = {
    atoms: Map<number, number>;
    bonds: Map<number, number>;
};
export declare function dropAndMerge(editor: Editor, mergeItems: MergeItems, action?: Action): void;
export {};
