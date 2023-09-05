export interface ITooltipProps {
    children: JSX.Element;
    text: string;
    className?: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    open?: boolean;
}
