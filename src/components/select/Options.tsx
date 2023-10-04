import cx from 'classnames';

import styles from 'components/select/Select.module.scss';
import { TSelectProps } from 'components/select/types';

type TOptionsProps<T> = Pick<
    TSelectProps<T>,
    | 'value'
    | 'options'
    | 'multiple'
    | 'getOptionLabel'
    | 'getOptionValue'
    | 'isOptionDisabled'
    | 'isOptionHidden'
    | 'isOptionSelected'
> & {
    isOpen: boolean;
};

export default function Options<T>({ isOpen }: TOptionsProps<T>): JSX.Element {
    return (
        <div
            className={cx(styles.options, {
                [styles['options--open']]: isOpen,
            })}
        >
            Component
        </div>
    );
}
