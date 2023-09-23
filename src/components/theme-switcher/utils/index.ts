import MoonIcon from 'components/icons/MoonIcon';
import SunIcon from 'components/icons/SunIcon';
import { IIconProps } from 'components/icons/types';
import { ETheme } from 'types/theme.types';

export const getUserTheme = (): ETheme => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return ETheme.dark;
    }

    return ETheme.light;
};

type TGetThemeSwitcherIcon = (
    value: ETheme,
) => (props: IIconProps) => JSX.Element;

export const getThemeSwitcherIcon: TGetThemeSwitcherIcon = (value) => {
    if (value === ETheme.light) {
        return MoonIcon;
    }

    return SunIcon;
};

export const getThemeSwitcherTitle = (value: ETheme): string => {
    if (value === ETheme.light) {
        return 'Enable Dark Mode';
    }

    return 'Enable Light Mode';
};
