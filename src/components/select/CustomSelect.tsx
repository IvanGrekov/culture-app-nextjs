import cx from 'classnames';

import styles from 'components/select/Select.module.scss';
import { TSelectProps, IUseSelectFieldResult } from 'components/select/types';

type ICustomSelectProps<T> = Pick<
    TSelectProps<T>,
    'error' | 'disabled' | 'className'
> &
    Pick<
        IUseSelectFieldResult<T>,
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
}: ICustomSelectProps<T>): JSX.Element {
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
        />
    );
}
