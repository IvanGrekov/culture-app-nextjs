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

        return optionValue === value;
    };
};
