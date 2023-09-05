import cx from 'classnames';
import FocusTrap from 'focus-trap-react';

import Button from 'components/button/Button';
import styles from 'components/drawer/Drawer.module.scss';
import { IDrawerProps } from 'components/drawer/types';
import CloseIcon from 'components/icons/CloseIcon';

export default function DrawerContent({
    isOpen,
    children,
    shouldAddCloseButton = true,
    position = 'left',
    style,
    className,
    onClose,
}: IDrawerProps): JSX.Element {
    return (
        <FocusTrap active={isOpen}>
            <div
                onClick={onClose}
                className={cx(styles.drawer, styles[`drawer--${position}`], {
                    [styles['drawer--open']]: isOpen,
                })}
            >
                <div
                    className={cx(
                        styles['content-wrapper'],
                        className,
                        styles[`content-wrapper--${position}`],
                        {
                            [styles['content-wrapper--open']]: isOpen,
                        },
                    )}
                    onClick={(event): void => {
                        event.stopPropagation();
                    }}
                    style={style}
                >
                    <div
                        className={cx(styles.content, {
                            [styles['content--shrinked']]: shouldAddCloseButton,
                        })}
                    >
                        {children}
                    </div>

                    {shouldAddCloseButton && (
                        <div className={styles['close-button-wrapper']}>
                            <Button
                                text="Close"
                                variant="ghost"
                                Icon={CloseIcon}
                                onClick={onClose}
                            />
                        </div>
                    )}
                </div>
            </div>
        </FocusTrap>
    );
}
