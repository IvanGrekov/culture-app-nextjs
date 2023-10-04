import { forwardRef, MouseEventHandler, Ref } from 'react';

import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import ArrowIcon from 'components/icons/ArrowIcon';
import styles from 'components/select/Select.module.scss';
import { TSelectBaseProps } from 'components/select/types';

type TArrowButtonProps = Pick<
    TSelectBaseProps,
    'error' | 'disabled' | 'arrowButtonClassName'
> & {
    isOpen: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const ArrowButton = (
    {
        error,
        disabled,
        isOpen,
        arrowButtonClassName,
        onClick,
    }: TArrowButtonProps,
    ref: Ref<HTMLButtonElement>,
): JSX.Element => {
    return (
        <IconButton
            ref={ref}
            iconSize={20}
            Icon={ArrowIcon}
            tabIndex={-1}
            className={cx(
                styles['arrow-button'],
                {
                    [styles['arrow-button--open']]: isOpen,
                    [styles['arrow-button--error']]: error,
                    [styles['arrow-button--disabled']]: disabled,
                },
                arrowButtonClassName,
            )}
            onClick={onClick}
        />
    );
};

export default forwardRef(ArrowButton);