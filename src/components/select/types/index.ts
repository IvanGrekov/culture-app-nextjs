import {
    FocusEventHandler,
    KeyboardEventHandler,
    ChangeEventHandler,
    MouseEventHandler,
    RefObject,
} from 'react';

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
};

export type TGetOptionLabel<T> = (option: T) => string;

export type TGetOptionValue<T> = (option: T) => string;

export type TGetIsOptionSelected<T> = (args: {
    option: T;
    value: T;
}) => boolean;

export type TGetIsOptionDisabled<T> = (option: T) => boolean;

export type TGetIsOptionHidden<T> = (option: T) => boolean;

export type TSelectProps<T> = TSelectBaseProps & {
    value: T;
    options: T[];
    onChange?: TOnSelectChange<T>;
    getOptionLabel?: TGetOptionLabel<T>;
    getOptionValue?: TGetOptionValue<T>;
    getIsOptionSelected?: TGetIsOptionSelected<T>;
    getIsOptionDisabled?: TGetIsOptionDisabled<T>;
    getIsOptionHidden?: TGetIsOptionHidden<T>;
};

export interface ISelectFieldHandlers<T> {
    onSelectFocus: TSelectProps<T>['onFocus'];
    onSelectBlur: TSelectProps<T>['onBlur'];
    onSelectKeyDown: KeyboardEventHandler<HTMLSelectElement>;
    onSelectChange?: ChangeEventHandler<HTMLSelectElement>;
    onWrapperClick: VoidFunction;
    onWrapperBlur: VoidFunction;
    onArrowButtonClick: MouseEventHandler<HTMLButtonElement>;
}

export interface ISelectFieldHandlersArgs<T> {
    onFocus?: TSelectProps<T>['onFocus'];
    onBlur?: TSelectProps<T>['onBlur'];
    onChange?: TSelectProps<T>['onChange'];
}

export interface IUseSelectFieldResult<T> extends ISelectFieldHandlers<T> {
    nativeSelectRef: RefObject<HTMLSelectElement>;
    customSelectRef: RefObject<HTMLInputElement>;
    selectOptionsRef: RefObject<HTMLDivElement>;
    id: string;
    isOpen: boolean;
    isFocused: boolean;
    isOptionsFixed: boolean;
    isFieldFilled: boolean;
}
