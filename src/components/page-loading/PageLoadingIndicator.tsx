'use client';

import cx from 'classnames';

import { usePageLoading } from 'components/page-loading/PageLoadingContext';
import styles from 'components/page-loading/PageLoadingIndicator.module.scss';
import Skeleton from 'components/skeleton/Skeleton';
import { LOADING_INDICATOR_HEIGHT } from 'constants/loadingIndicator.constants';

interface IPageLoadingIndicatorProps {
    className?: string;
}

export default function PageLoadingIndicator({
    className,
}: IPageLoadingIndicatorProps): JSX.Element {
    const { isLoading } = usePageLoading();

    return (
        <Skeleton
            height={LOADING_INDICATOR_HEIGHT}
            className={cx(
                styles.indicator,
                {
                    [styles['indicator--visible']]: isLoading,
                },
                className,
            )}
        />
    );
}
