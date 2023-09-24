import IconWrapper from 'components/icons/IconWrapper';
import { IIconProps } from 'components/icons/types';

export default function SunIcon({
    size,
    className,
    wrapperClassName,
}: IIconProps): JSX.Element {
    return (
        <IconWrapper size={size} className={wrapperClassName}>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="128px"
                height="128px"
                viewBox="0 0 128 128"
                className={className}
            >
                <g>
                    <path
                        d="M64,20c2.211,0,4-1.789,4-4V8c0-2.211-1.789-4-4-4s-4,1.789-4,4v8C60,18.211,61.789,20,64,20z M64,108
			c-2.211,0-4,1.789-4,4v8c0,2.211,1.789,4,4,4s4-1.789,4-4v-8C68,109.789,66.211,108,64,108z M120,60h-8c-2.211,0-4,1.789-4,4
			s1.789,4,4,4h8c2.211,0,4-1.789,4-4S122.211,60,120,60z M16,60H8c-2.211,0-4,1.789-4,4s1.789,4,4,4h8c2.211,0,4-1.789,4-4
			S18.211,60,16,60z M100.77,21.574l-5.656,5.656c-1.563,1.563-1.563,4.094,0,5.656s4.094,1.563,5.656,0l5.656-5.656
			c1.563-1.563,1.563-4.094,0-5.656S102.332,20.012,100.77,21.574z M27.23,95.113l-5.656,5.656c-1.563,1.563-1.563,4.094,0,5.656
			s4.094,1.563,5.656,0l5.656-5.656c1.563-1.563,1.563-4.094,0-5.656S28.793,93.551,27.23,95.113z M27.23,32.887
			c1.563,1.563,4.094,1.563,5.656,0s1.563-4.094,0-5.656l-5.656-5.656c-1.563-1.563-4.094-1.563-5.656,0s-1.563,4.094,0,5.656
			L27.23,32.887z M100.77,95.113c-1.563-1.563-4.094-1.563-5.656,0s-1.563,4.094,0,5.656l5.656,5.656
			c1.563,1.563,4.094,1.563,5.656,0s1.563-4.094,0-5.656L100.77,95.113z M64,28c-19.883,0-36,16.117-36,36s16.117,36,36,36
			s36-16.117,36-36S83.883,28,64,28z M64,92c-15.438,0-28-12.563-28-28s12.563-28,28-28s28,12.563,28,28S79.438,92,64,92z"
                    />
                </g>
            </svg>
        </IconWrapper>
    );
}
