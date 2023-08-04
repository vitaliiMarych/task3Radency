
export enum modalTypes {
    ADD,
    EDIT,
}

export interface modalPropetiesType {
    visible: boolean;
    modalType: modalTypes;

    index: number;
    oldNoteContent: string;
    oldNoteCategory: string;
}
