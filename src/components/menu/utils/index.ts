import { cloneElement, MouseEvent, FunctionComponentElement } from 'react';

type TGetElementWithOnClick = (args: {
    Element: JSX.Element;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}) => FunctionComponentElement<unknown>;

export const getElementWithOnClick: TGetElementWithOnClick = ({
    Element,
    onClick,
}) => {
    return cloneElement(Element, {
        onClick,
    });
};
