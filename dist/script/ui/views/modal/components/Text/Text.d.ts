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
/// <reference types="react" />
import 'draft-js/dist/Draft.css';
import { DialogParams } from '../../../components/Dialog/Dialog';
interface TextProps extends DialogParams {
    formState: any;
    id?: any;
    content: string;
    position?: string;
}
declare const _default: import("react-redux").ConnectedComponent<(props: TextProps) => JSX.Element, import("react-redux").Omit<TextProps, "formState">>;
export default _default;
