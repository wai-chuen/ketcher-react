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
import { OutputFormatType } from 'ketcher-core';
import { PropsWithChildren } from 'react';
declare type Props = {
    server?: any;
    filename: string;
    outputFormat?: OutputFormatType;
    data: any;
    type?: string;
    mode?: string;
    onSave?: () => void;
    onError?: (err: any) => void;
    className?: string;
    title?: string;
};
declare type SaveButtonProps = PropsWithChildren<Props>;
declare const SaveButton: (props: SaveButtonProps) => JSX.Element;
export { SaveButton };
