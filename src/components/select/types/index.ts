import { FocusEventHandler, MouseEventHandler, RefObject } from 'react';

import { TTextFieldBaseProps } from 'types/textField.types';

export type TOnSelectChange<T> = (value: T) => void;

export type TSelectBaseProps = TTextFieldBaseProps & {
    name?: string;
    multiple?: boolean;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    arrowButtonClassName?: string;
    className?: string;
    onFocus?: FocusEventHandler<HTMLSelectElement>;
    onBlur?: FocusEventHandler<HTMLSelectElement>;
    onClick?: MouseEventHandler<HTMLSelectElement>;
};

export type TSelectProps<T> = TSelectBaseProps & {
    // TODO: remove '?'
    value?: T;
    // TODO: remove '?'
    options?: T[];
    // TODO: remove '?'
    onChange?: TOnSelectChange<T>;
    getOptionLabel?: (option: T) => string;
    getOptionValue?: (option: T) => string;
    isOptionSelected?: (option: T) => boolean;
    isOptionDisabled?: (option: T) => boolean;
    isOptionHidden?: (option: T) => boolean;
};

export interface ISelectFieldHandlers<T> {
    onSelectFocus: TSelectProps<T>['onFocus'];
    onSelectBlur: TSelectProps<T>['onBlur'];
    onSelectClick?: TSelectProps<T>['onClick'];
    onSelectChange: TSelectProps<T>['onChange'];
}

export interface ISelectFieldHandlersArgs<T> {
    onFocus?: TSelectProps<T>['onFocus'];
    onBlur?: TSelectProps<T>['onBlur'];
    onClick?: TSelectProps<T>['onClick'];
    onChange?: TSelectProps<T>['onChange'];
}

export interface IUseSelectFieldResult<T> extends ISelectFieldHandlersArgs<T> {
    nativeSelectRef: RefObject<HTMLSelectElement>;
    customSelectRef: RefObject<HTMLInputElement>;
    id: string;
    isOpen: boolean;
    isFocused: boolean;
    isFieldFilled: boolean;
}
