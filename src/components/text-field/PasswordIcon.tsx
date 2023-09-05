import { Dispatch, SetStateAction } from 'react';

import cx from 'classnames';

import EyeIcon from 'components/icons/EyeIcon';
import HiddenEyeIcon from 'components/icons/HiddenEyeIcon';
import styles from 'components/text-field/TextField.module.scss';
import { TTextFieldProps } from 'components/text-field/types';

type TIconProps = Pick<TTextFieldProps, 'type' | 'disabled' | 'error'> & {
    isValueVisible: boolean;
    setIsValueVisible: Dispatch<SetStateAction<boolean>>;
};

export default function PasswordIcon({
    type,
    isValueVisible,
    error,
    disabled,
    setIsValueVisible,
}: TIconProps): JSX.Element | null {
    if (type !== 'password') {
        return null;
    }

    disabled;

    const onClick = (): void => {
        setIsValueVisible((prev) => !prev);
    };

    const title = isValueVisible ? 'Hide password' : 'Show password';
    const Icon = isValueVisible ? HiddenEyeIcon : EyeIcon;

    return (
        <button
            title={title}
            className={cx(styles.icon, {
                [styles['icon--error']]: error,
                [styles['icon--disabled']]: disabled,
            })}
            onClick={onClick}
        >
            <Icon size={30} />
        </button>
    );
}
