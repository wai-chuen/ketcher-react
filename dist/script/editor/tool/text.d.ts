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
declare class TextTool {
    editor: any;
    dragCtx: any;
    constructor(editor: any);
    mousedown(event: any): void;
    mousemove(event: any): void;
    mouseup(): boolean;
    click(event: any): boolean;
    dblclick(event: any): boolean;
}
export default TextTool;
