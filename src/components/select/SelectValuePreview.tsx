import { TSelectProps } from 'components/select/types';
import { getDefaultGetOptionLabel } from 'components/select/utils/optionItem.utils';
import Typography from 'components/typography/Typography';

type TSelectValuePreview<T> = Pick<TSelectProps<T>, 'value' | 'getOptionLabel'>;

export default function SelectValuePreview<T>({
    value,
    getOptionLabel = getDefaultGetOptionLabel(),
}: TSelectValuePreview<T>): JSX.Element | null {
    const isMultipleValue = Array.isArray(value);
    const isEmptyValue = isMultipleValue ? value.length === 0 : !value;

    if (isEmptyValue) {
        return null;
    }

    const valueLabels = isMultipleValue
        ? value.map(getOptionLabel)
        : getOptionLabel(value);

    if (Array.isArray(valueLabels)) {
        return <Typography>{valueLabels.join(', ')}</Typography>;
    }

    return <Typography>{valueLabels}</Typography>;
}
