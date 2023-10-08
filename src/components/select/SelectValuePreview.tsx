import styles from 'components/select/Select.module.scss';
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

    if (isMultipleValue) {
        const valueLabels = value.map(getOptionLabel);

        return <Typography>{valueLabels.join(', ')}</Typography>;
    }

    return (
        <Typography className={styles['value-preview']}>
            {getOptionLabel(value)}
        </Typography>
    );
}
