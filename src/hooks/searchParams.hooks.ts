import { useRouter, usePathname, useSearchParams } from 'next/navigation';

type TUpdateSearchParams = (key: string, value: string) => void;
type TUseUpdateSearchParams = () => TUpdateSearchParams;

export const useUpdateSearchParams: TUseUpdateSearchParams = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    return (key, value) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const params = new URLSearchParams(searchParams);

        if (value === '') {
            params.delete(key);
        } else {
            params.set(key, value);
        }

        const newSearchParams =
            params.size === 0 ? '' : `?${params.toString()}`;

        router.push(`${pathname}${newSearchParams}`);
    };
};

export const useSearchParamsValue = (key: string): string => {
    const searchParams = useSearchParams();

    const value = searchParams.get(key);

    return value || '';
};
