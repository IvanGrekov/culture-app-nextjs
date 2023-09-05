import {
    InputHTMLAttributes,
    FocusEventHandler,
    ChangeEventHandler,
    MouseEventHandler,
    RefObject,
    Dispatch,
    SetStateAction,
} from 'react';

import { TTextFieldBaseProps } from 'types/textField.types';

export type TTextFieldProps = InputHTMLAttributes<HTMLInputElement> &
    TTextFieldBaseProps & {
        type?:
            | 'text'
            | 'password'
            | 'email'
            | 'number'
            | 'tel'
            | 'url'
            | 'search'
            | 'date';
    };

export interface IInputHandlers {
    onInputFocus: FocusEventHandler<HTMLInputElement>;
    onInputBlur: FocusEventHandler<HTMLInputElement>;
    onInputClick?: MouseEventHandler<HTMLInputElement>;
    onInputChange: ChangeEventHandler<HTMLInputElement>;
}

export interface IInputHandlersArgs {
    onFocus?: IInputHandlers['onInputFocus'];
    onBlur?: IInputHandlers['onInputBlur'];
    onClick?: IInputHandlers['onInputClick'];
    onChange?: IInputHandlers['onInputChange'];
}

export interface IUseTextFieldResult extends IInputHandlers {
    inputRef: RefObject<HTMLInputElement>;
    id: string;
    inputType: TTextFieldProps['type'];
    isFocused: boolean;
    isInputFilled: boolean;
    isValueVisible: boolean;
    setIsValueVisible: Dispatch<SetStateAction<boolean>>;
}
