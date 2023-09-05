import cx from 'classnames';

import InputLabelRequiredMark from 'components/input-label-required-mark/InputLabelRequiredMark';
import styles from 'components/text-field-label/TextFieldLabel.module.scss';
import TextFieldLabelText from 'components/text-field-label-text/TextFieldLabelText';

export interface ITextFieldLabelProps {
    id: string;
    label?: string;
    isFocused: boolean;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}

export default function TextFieldLabel({
    id,
    label,
    isFocused,
    error,
    required,
    disabled,
    className,
}: ITextFieldLabelProps): JSX.Element | null {
    if (!label) {
        return null;
    }

    return (
        <label
            htmlFor={id}
            className={cx(
                styles.label,
                {
                    [styles['label--focused']]: isFocused,
                    [styles['label--error']]: error,
                },
                className,
            )}
        >
            <>
                <TextFieldLabelText text={label} variant="body2" />

                <InputLabelRequiredMark
                    required={required}
                    disabled={disabled}
                />
            </>
        </label>
    );
}
