import IconWrapper from 'components/icons/IconWrapper';
import { IIconProps } from 'components/icons/types';

export default function MoreIcon({ size, className }: IIconProps): JSX.Element {
    return (
        <IconWrapper size={size}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={className}
            >
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="19" r="2" />
            </svg>
        </IconWrapper>
    );
}
