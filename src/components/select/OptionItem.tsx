import cx from 'classnames';

import styles from 'components/select/Select.module.scss';
import { TSelectProps } from 'components/select/types';
import {
    getDefaultGetOptionLabel,
    getDefaultGetIsOptionSelected,
} from 'components/select/utils/optionItem.utils';
import Typography from 'components/typography/Typography';

type IOptionItemProps<T> = Pick<
    TSelectProps<T>,
    | 'value'
    | 'multiple'
    | 'getOptionLabel'
    | 'getOptionValue'
    | 'getIsOptionDisabled'
    | 'getIsOptionHidden'
    | 'getIsOptionSelected'
> & {
    option: T;
};

export default function OptionItem<T>({
    option,
    value,
    getIsOptionHidden,
    getIsOptionDisabled,
    getOptionLabel = getDefaultGetOptionLabel(),
    getIsOptionSelected = getDefaultGetIsOptionSelected(getOptionLabel),
}: IOptionItemProps<T>): JSX.Element | null {
    const isHidden = getIsOptionHidden?.(option);

    if (isHidden) {
        return null;
    }

    const isDisabled = getIsOptionDisabled?.(option);
    const isSelected = getIsOptionSelected({
        option,
        value,
    });

    return (
        <button
            tabIndex={1}
            className={cx(styles['option-item'], {
                [styles['option-item--disabled']]: isDisabled,
                [styles['option-item--selected']]: isSelected,
            })}
        >
            <Typography>{getOptionLabel(option)}</Typography>
        </button>
    );
}
