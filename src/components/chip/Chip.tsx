import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import styles from 'components/chip/Chip.module.scss';
import { IChipProps } from 'components/chip/types';
import CloseIcon from 'components/icons/CloseIcon';
import Typography from 'components/typography/Typography';

export default function Chip({
    title,
    variant = 'contained',
    titleVariant = 'body1',
    className,
    onDelete,
}: IChipProps): JSX.Element {
    return (
        <div className={cx(styles.chip, styles[`chip--${variant}`], className)}>
            <Typography
                element="span"
                variant={titleVariant}
                className={styles.text}
            >
                {title}
            </Typography>

            {onDelete && (
                <IconButton
                    Icon={CloseIcon}
                    iconSize={15}
                    variant="overlayed"
                    className={styles.delete}
                    onClick={onDelete}
                />
            )}
        </div>
    );
}
