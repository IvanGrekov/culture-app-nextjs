import { Ref } from 'react';

import cx from 'classnames';

import OptionItem from 'components/select/OptionItem';
import styles from 'components/select/Select.module.scss';
import { TSelectProps } from 'components/select/types';
import { getDefaultGetOptionLabel } from 'components/select/utils/optionItem.utils';

type TOptionsProps<T> = Pick<
    TSelectProps<T>,
    | 'value'
    | 'options'
    | 'multiple'
    | 'getOptionLabel'
    | 'getOptionValue'
    | 'getIsOptionDisabled'
    | 'getIsOptionHidden'
    | 'getIsOptionSelected'
> & {
    optionsRef: Ref<HTMLDivElement>;
    isOpen: boolean;
    isOptionsFixed: boolean;
};

export default function Options<T>({
    options,
    optionsRef,
    isOpen,
    isOptionsFixed,
    getOptionValue = getDefaultGetOptionLabel(),
    ...props
}: TOptionsProps<T>): JSX.Element {
    return (
        <div
            ref={optionsRef}
            className={cx(styles.options, {
                [styles['options--open']]: isOpen,
                [styles['options--fixed']]: isOptionsFixed,
            })}
        >
            {options.map((option) => (
                <OptionItem
                    key={getOptionValue(option)}
                    option={option}
                    getOptionValue={getOptionValue}
                    {...props}
                />
            ))}
        </div>
    );
}
