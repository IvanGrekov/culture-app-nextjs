import { Ref } from 'react';

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
    optionsRef: Ref<HTMLDivElement>;
    isOpen: boolean;
    isOptionsFixed: boolean;
};

export default function Options<T>({
    optionsRef,
    isOpen,
    isOptionsFixed,
}: TOptionsProps<T>): JSX.Element {
    return (
        <div
            ref={optionsRef}
            className={cx(styles.options, {
                [styles['options--open']]: isOpen,
                [styles['options--fixed']]: isOptionsFixed,
            })}
        >
            Component
            <br />
            Options
            <br />
            Component
        </div>
    );
}
