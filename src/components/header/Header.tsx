'use client';

import { PropsWithChildren } from 'react';

import cx from 'classnames';

import styles from 'components/header/Header.module.scss';
import { useShouldShowThemeSwitcher } from 'components/header/hooks';
import OpenMobileSidebarButton from 'components/open-mobile-sidebar-button/OpenMobileSidebarButton';
import PageLoadingIndicator from 'components/page-loading/PageLoadingIndicator';
import ThemeSwitcher from 'components/theme-switcher/ThemeSwitcher';
import { useIsHeaderFixed } from 'hooks/header.hooks';

interface IHeaderProps extends PropsWithChildren {
    className?: string;
    isSidebarLayout?: boolean;
}

export default function Header({
    className,
    isSidebarLayout,
    children,
}: IHeaderProps): JSX.Element {
    const { isFixed } = useIsHeaderFixed();
    const shouldShowThemeSwitcher = useShouldShowThemeSwitcher();

    return (
        <header
            className={cx(
                styles.header,
                {
                    [styles['header--fixed']]: isFixed,
                    [styles['sidebar-layout']]: isSidebarLayout,
                },
                className,
            )}
        >
            <PageLoadingIndicator className={styles.loading} />

            <div className={styles.content}>
                <OpenMobileSidebarButton />

                {shouldShowThemeSwitcher && <ThemeSwitcher />}

                {children}
            </div>
        </header>
    );
}
