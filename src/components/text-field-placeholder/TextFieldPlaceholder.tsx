import cx from 'classnames';

import InputLabelRequiredMark from 'components/input-label-required-mark/InputLabelRequiredMark';
import TextFieldLabelText from 'components/text-field-label-text/TextFieldLabelText';
import styles from 'components/text-field-placeholder/TextFieldPlaceholder.module.scss';

interface ITextFieldPlaceholderProps {
    id: string;
    placeholder?: string;
    isFieldFilled: boolean;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}

export default function TextFieldPlaceholder({
    id,
    placeholder,
    isFieldFilled,
    error,
    required,
    disabled,
    className,
}: ITextFieldPlaceholderProps): JSX.Element | null {
    if (!placeholder || isFieldFilled) {
        return null;
    }

    return (
        <label
            htmlFor={id}
            className={cx(
                styles.placeholder,
                {
                    [styles['placeholder--error']]: error,
                    [styles['placeholder--disabled']]: disabled,
                },
                className,
            )}
        >
            <>
                <TextFieldLabelText text={placeholder} />

                <InputLabelRequiredMark
                    required={required}
                    disabled={disabled}
                />
            </>
        </label>
    );
}
