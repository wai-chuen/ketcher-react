import { FunctionalGroup } from 'ketcher-core';
import type { PredicateParams } from 'react-contexify';
export declare enum CONTEXT_MENU_ID {
    FOR_BONDS = "context-menu-for-bonds",
    FOR_ATOMS = "context-menu-for-atoms",
    FOR_SELECTION = "context-menu-for-selection",
    FOR_FUNCTIONAL_GROUPS = "context-menu-for-functional-groups"
}
export declare type ItemData = unknown;
export declare type ContextMenuShowProps = {
    id: CONTEXT_MENU_ID;
    functionalGroups?: FunctionalGroup[];
    bondIds?: number[];
    atomIds?: number[];
} | null;
export declare type ItemEventParams = PredicateParams<ContextMenuShowProps, ItemData>;
export declare type contextMenuInfo = {
    [id in CONTEXT_MENU_ID]?: boolean;
};
