/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import { Action, Editor as KetcherEditor, Render, Struct } from 'ketcher-core';
import { PipelineSubscription, Subscription } from 'subscription';
import { Highlighter } from './highlighter';
import { contextMenuInfo } from '../ui/views/components/ContextMenu/contextMenu.types';
export interface Selection {
    atoms?: Array<number>;
    bonds?: Array<number>;
    enhancedFlags?: Array<number>;
    rxnPluses?: Array<number>;
    rxnArrows?: Array<number>;
}
declare class Editor implements KetcherEditor {
    #private;
    render: Render;
    _selection: Selection | null;
    _tool: any;
    historyStack: any;
    historyPtr: any;
    errorHandler: ((message: string) => void) | null;
    highlights: Highlighter;
    hoverIcon: any;
    lastCursorPosition: {
        x: number;
        y: number;
    };
    contextMenu: contextMenuInfo;
    event: {
        message: Subscription;
        elementEdit: PipelineSubscription;
        bondEdit: PipelineSubscription;
        rgroupEdit: PipelineSubscription;
        sgroupEdit: PipelineSubscription;
        sdataEdit: PipelineSubscription;
        quickEdit: PipelineSubscription;
        attachEdit: PipelineSubscription;
        removeFG: PipelineSubscription;
        change: Subscription;
        selectionChange: PipelineSubscription;
        aromatizeStruct: PipelineSubscription;
        dearomatizeStruct: PipelineSubscription;
        enhancedStereoEdit: PipelineSubscription;
        confirm: PipelineSubscription;
        showInfo: PipelineSubscription;
        apiSettings: PipelineSubscription;
        cursor: Subscription;
    };
    lastEvent: any;
    constructor(clientArea: any, options: any);
    isDitrty(): boolean;
    setOrigin(): void;
    tool(name?: any, opts?: any): any;
    updateHoverIconPosition(): void;
    createHoverIcon(): void;
    clear(): void;
    renderAndRecoordinateStruct(struct: Struct): Struct;
    struct(value?: Struct): Struct;
    structToAddFragment(value: Struct): Struct;
    setOptions(opts: string): any;
    options(value?: any): any;
    zoom(value?: any): any;
    selection(ci?: any): Selection | null;
    hover(ci: any, newTool?: any, event?: PointerEvent): void;
    update(action: Action | true, ignoreHistory?: boolean): void;
    historySize(): {
        undo: any;
        redo: number;
    };
    undo(): void;
    redo(): void;
    subscribe(eventName: any, handler: any): {
        handler: any;
    };
    unsubscribe(eventName: any, subscriber: any): void;
    findItem(event: any, maps: any, skip?: any): any;
    findMerge(srcItems: any, maps: any): {
        atoms: Map<number, number>;
        bonds: Map<number, number> | null;
    };
    explicitSelected(): any;
    structSelected(): Struct;
    alignDescriptors(): void;
}
export { Editor };
export default Editor;
