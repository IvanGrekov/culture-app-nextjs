import cx from 'classnames';
import FocusTrap from 'focus-trap-react';

import InputContainer from 'components/input-container/InputContainer';
import ArrowButton from 'components/select/ArrowButton';
import styles from 'components/select/Select.module.scss';
import { useSelectField } from 'components/select/hooks';
import { TSelectProps } from 'components/select/types';
import TextFieldLabel from 'components/text-field-label/TextFieldLabel';
import TextFieldPlaceholder from 'components/text-field-placeholder/TextFieldPlaceholder';
import TextFieldWrapper from 'components/text-field-wrapper/TextFieldWrapper';

export default function Select<T>({
    name,
    error,
    required,
    disabled,
    label,
    placeholder = label || 'Select option',
    shouldHidePlaceholder,
    containerClassName,
    labelClassName,
    placeholderClassName,
    errorClassName,
    textFieldWrapperClassName,
    arrowButtonClassName,
    className,
    onChange,
    onFocus,
    onBlur,
}: TSelectProps<T>): JSX.Element {
    const {
        nativeSelectRef,
        customSelectRef,
        id,
        isOpen,
        isFocused,
        isFieldFilled,
        onSelectFocus,
        onSelectBlur,
        onSelectChange,
        onWrapperClick,
        onWrapperBlur,
    } = useSelectField<T>({
        onFocus,
        onBlur,
        onChange,
    });

    return (
        <>
            <InputContainer
                error={error}
                disabled={disabled}
                className={containerClassName}
                errorClassName={errorClassName}
            >
                <FocusTrap
                    active={isOpen}
                    focusTrapOptions={{
                        clickOutsideDeactivates: true,
                        onDeactivate: onWrapperBlur,
                    }}
                >
                    <div
                        className={styles['select-wrapper']}
                        onClick={onWrapperClick}
                    >
                        <TextFieldWrapper
                            disabled={disabled}
                            className={textFieldWrapperClassName}
                        >
                            <select
                                ref={nativeSelectRef}
                                id={id}
                                name={name}
                                disabled={disabled}
                                className={styles['native-select']}
                                onFocus={onSelectFocus}
                                onBlur={onSelectBlur}
                                onChange={onSelectChange}
                            />

                            <div
                                ref={customSelectRef}
                                className={cx(
                                    styles.select,
                                    {
                                        [styles['select--focused']]: isFocused,
                                        [styles['select--open']]: isOpen,
                                        [styles['select--filled']]:
                                            isFieldFilled,
                                        [styles['select--disabled']]: disabled,
                                        [styles['select--error']]: error,
                                    },
                                    className,
                                )}
                            />

                            <ArrowButton
                                error={error}
                                disabled={disabled}
                                isOpen={isOpen}
                                arrowButtonClassName={arrowButtonClassName}
                            />

                            <TextFieldLabel
                                htmlFor={id}
                                label={label}
                                required={required}
                                disabled={disabled}
                                isFocused={isFocused}
                                error={error}
                                className={cx(
                                    styles.label,
                                    {
                                        [styles['label--focused']]: isFocused,
                                    },
                                    labelClassName,
                                )}
                            />

                            {!shouldHidePlaceholder && (
                                <TextFieldPlaceholder
                                    htmlFor={id}
                                    placeholder={placeholder}
                                    required={required}
                                    disabled={disabled}
                                    isFieldFilled={isFieldFilled}
                                    error={error}
                                    className={cx(
                                        styles.placeholder,
                                        placeholderClassName,
                                    )}
                                />
                            )}
                        </TextFieldWrapper>

                        {isOpen && <>Open</>}
                    </div>
                </FocusTrap>
            </InputContainer>
        </>
    );
}
