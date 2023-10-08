import { MouseEvent } from 'react';

import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import CloseIcon from 'components/icons/CloseIcon';
import styles from 'components/select/Select.module.scss';
import { SELECT_ICON_SIZE } from 'components/select/constants';
import { TSelectProps } from 'components/select/types';

type TClearValueButtonProps<T> = Pick<
    TSelectProps<T>,
    'clearValueButtonClassName' | 'onChange'
>;

export default function ClearValueButton<T>({
    clearValueButtonClassName,
    onChange,
}: TClearValueButtonProps<T>): JSX.Element {
    const onClick = (e: MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        onChange(null);
    };

    return (
        <IconButton
            iconSize={SELECT_ICON_SIZE}
            onClick={onClick}
            Icon={CloseIcon}
            tabIndex={-1}
            className={cx(
                styles['clear-value-button'],
                clearValueButtonClassName,
            )}
        />
    );
}
