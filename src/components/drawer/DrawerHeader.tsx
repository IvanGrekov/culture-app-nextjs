import { PropsWithChildren } from 'react';

import cx from 'classnames';

import styles from 'components/drawer/Drawer.module.scss';
import { useIsHeaderCompressed } from 'components/drawer/hooks/drawerHeader.hooks';

export default function DrawerHeader({
    children,
}: PropsWithChildren): JSX.Element {
    const { isCompressed } = useIsHeaderCompressed();

    return (
        <div
            className={cx(styles['header'], {
                [styles['header--compressed']]: isCompressed,
            })}
        >
            {children}
        </div>
    );
}
