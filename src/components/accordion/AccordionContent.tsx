import cx from 'classnames';

import styles from 'components/accordion/Accordion.module.scss';
import { IAccordionContentProps } from 'components/accordion/types';

export default function AccordionContent({
    isOpen,
    children,
}: IAccordionContentProps): JSX.Element {
    return (
        <div
            className={cx(styles.content, {
                [styles['content--open']]: isOpen,
            })}
        >
            {children}
        </div>
    );
}
