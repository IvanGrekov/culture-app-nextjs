import CheckedSquareIcon from 'components/icons/CheckedSquareIcon';
import OutlinedSquareIcon from 'components/icons/OutlinedSquareIcon';
import { IIconProps } from 'components/icons/types';
import {
    TGetOptionLabel,
    TGetOptionValue,
    TGetIsOptionSelected,
} from 'components/select/types';

export const getDefaultGetOptionLabel = <T>(): TGetOptionLabel<T> => {
    return (option: T): string => {
        return String(option);
    };
};

export const getDefaultGetOptionValue = <T>(): TGetOptionValue<T> => {
    return (option: T): string => {
        return String(option);
    };
};

export const getDefaultGetIsOptionSelected = <T>(
    getOptionValue: TGetOptionValue<T>,
): TGetIsOptionSelected<T> => {
    return ({ option, value }) => {
        const optionValue = getOptionValue(option);

        const isArray = Array.isArray(value);

        if (isArray) {
            return value.some((item) => item === optionValue);
        }

        return optionValue === value;
    };
};

type TGetMultipleSelectOptionItemIcon = (
    isSelected: boolean,
) => (props: IIconProps) => JSX.Element;

export const getMultipleSelectOptionItemIcon: TGetMultipleSelectOptionItemIcon =
    (isChecked) => {
        return isChecked ? CheckedSquareIcon : OutlinedSquareIcon;
    };