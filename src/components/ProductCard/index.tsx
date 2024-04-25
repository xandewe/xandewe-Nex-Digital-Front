import React from 'react';
import { IProduct } from '../../types/product';

import { Container, Image, Info, Name, Value, ValuePer } from './styled';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const getRandomImage = () => {
        const randomId = Math.floor(Math.random() * 1000);
        return `https://picsum.photos/id/${randomId}/200/200`;
      };

    return (
        <Container>
        <Image src={getRandomImage()} alt={product.name} />
        <Info>
            <Name>{product.name}</Name>
            <Value>R${product.value}</Value>
            <ValuePer>{product.valuePer}</ValuePer>
        </Info>
        </Container>
    );
};

export default ProductCard;
