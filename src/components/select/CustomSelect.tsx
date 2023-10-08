import cx from 'classnames';

import styles from 'components/select/Select.module.scss';
import SelectValuePreview from 'components/select/SelectValuePreview';
import { TSelectProps, TUseSelectFieldResult } from 'components/select/types';

type TCustomSelectProps<T> = Pick<
    TSelectProps<T>,
    'value' | 'error' | 'disabled' | 'className' | 'getOptionLabel'
> &
    Pick<
        TUseSelectFieldResult<T>,
        | 'customSelectRef'
        | 'isOpen'
        | 'isFocused'
        | 'isOptionsFixed'
        | 'isFieldFilled'
    >;

export default function CustomSelect<T>({
    customSelectRef,
    isOpen,
    isFocused,
    isOptionsFixed,
    isFieldFilled,
    disabled,
    error,
    className,
    ...valuePreviewProps
}: TCustomSelectProps<T>): JSX.Element {
    return (
        <div
            ref={customSelectRef}
            className={cx(
                styles.select,
                {
                    [styles['select--focused']]: isFocused,
                    [styles['select--open']]: isOpen,
                    [styles['select--fixed-options']]: isOptionsFixed,
                    [styles['select--filled']]: isFieldFilled,
                    [styles['select--disabled']]: disabled,
                    [styles['select--error']]: error,
                },
                className,
            )}
        >
            <div className={styles['select__value-preview-wrapper']}>
                <SelectValuePreview {...valuePreviewProps} />
            </div>
        </div>
    );
}
