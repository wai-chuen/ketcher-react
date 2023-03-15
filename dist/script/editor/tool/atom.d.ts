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
import Editor from '../Editor';
declare class AtomTool {
    #private;
    editor: Editor;
    atomProps: any;
    dragCtx: any;
    isNotActiveTool: boolean | undefined;
    constructor(editor: any, atomProps: any);
    mousedown(event: any): void;
    mouseLeaveClientArea(): void;
    mouseover(): void;
    mousemove(event: any): void;
    mouseup(event: any): void;
}
export declare function atomLongtapEvent(tool: any, render: any): void;
export default AtomTool;
