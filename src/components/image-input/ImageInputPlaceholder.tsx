import cx from 'classnames';

import PictureIcon from 'components/icons/PictureIcon';
import styles from 'components/image-input/ImageInput.module.scss';
import { INPUT_DEFAULT_CAPTION } from 'components/image-input/constants';
import { IImageInputPlaceholderProps } from 'components/image-input/types';
import InputLabelRequiredMark from 'components/input-label-required-mark/InputLabelRequiredMark';
import Typography from 'components/typography/Typography';

export default function ImageInputPlaceholder({
    disabled,
    required,
    placeholder = 'Upload image',
    caption = INPUT_DEFAULT_CAPTION,
    placeholderVariant = 'body1',
    placeholderClassName,
}: IImageInputPlaceholderProps): JSX.Element {
    return (
        <div
            className={cx(styles['placeholder-wrapper'], {
                [styles['placeholder-wrapper--disabled']]: disabled,
            })}
        >
            <PictureIcon size={70} className={styles.icon} />

            <div className={cx(styles.placeholder, {})}>
                {!!placeholder && (
                    <Typography
                        variant={placeholderVariant}
                        className={cx(
                            styles['placeholder-text'],
                            placeholderClassName,
                        )}
                    >
                        {placeholder}
                    </Typography>
                )}

                <InputLabelRequiredMark
                    required={required}
                    disabled={disabled}
                />
            </div>

            {!!caption && (
                <Typography variant="caption" className={cx(styles.caption)}>
                    {caption}
                </Typography>
            )}
        </div>
    );
}
