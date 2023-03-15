import { Atom } from 'ketcher-core';
export declare function isAtomsArray(selectedElements: Atom | Atom[]): boolean;
declare type somePropertiesOfAtom = Partial<{
    [attribute in keyof Atom]: string | number | boolean;
}>;
export declare function generateCommonProperties(selectedElements: Atom[]): somePropertiesOfAtom;
export declare function updateOnlyChangedProperties(atomId: any, userChangedAtom: any, molecule: any): {};
export declare function updateSelectedAtoms({ atoms, changeAtomPromise, editor }: {
    atoms: number[];
    editor: any;
    changeAtomPromise: Promise<Atom>;
}): void;
export {};
