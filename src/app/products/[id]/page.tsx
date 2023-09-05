import { IPageProps } from 'types/page.types';

export const metadata = {
    title: 'Product',
    description: 'Here is the product you could buy',
};

export default function ProductPage({
    params: { id },
}: IPageProps<{ id: string }>): JSX.Element {
    return <div>Product {id}</div>;
}
