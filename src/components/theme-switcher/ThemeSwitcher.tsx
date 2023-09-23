'use client';

import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import styles from 'components/theme-switcher/ThemeSwitcher.module.scss';
import { useUserThemeValue } from 'components/theme-switcher/hooks';
import {
    getThemeSwitcherIcon,
    getThemeSwitcherTitle,
} from 'components/theme-switcher/utils';
import Tooltip from 'components/tooltip/Tooltip';
import { ETheme } from 'types/theme.types';

interface IThemeSwitcherProps {
    className?: string;
}

export default function ThemeSwitcher({
    className,
}: IThemeSwitcherProps): JSX.Element {
    const { localStorageValue, setLocalStorageValue } = useUserThemeValue();

    const title = getThemeSwitcherTitle(localStorageValue);
    const Icon = getThemeSwitcherIcon(localStorageValue);

    const onClick = (): void => {
        setLocalStorageValue((prevValue) =>
            prevValue === ETheme.light ? ETheme.dark : ETheme.light,
        );
    };

    return (
        <Tooltip text={title} position="bottom">
            <IconButton
                Icon={Icon}
                className={cx(styles.button, className)}
                onClick={onClick}
            />
        </Tooltip>
    );
}
