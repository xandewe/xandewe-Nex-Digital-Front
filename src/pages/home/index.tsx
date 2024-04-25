import React, { useState, useEffect } from 'react';
import { IProduct } from "../../types/product";
import { headers, api } from "../../requests"; 
import ProductCard from '../../components/ProductCard';

import {
  Container,
  ItemList,
  PaginationButton,
} from './styled';

const HomePage: React.FC = () => {
  const [items, setItems] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    fetchData();
  }, [currentPage, itemsPerPage]);

  const fetchData = async () => {
    try {
      const response = await api.get(`products?page=${currentPage}&limit=${itemsPerPage}`, headers);
      setItems(response.data.docs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <h1>Lista de Itens</h1>
      <ItemList>
        {items.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </ItemList>
      <PaginationButton onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>
        Anterior
      </PaginationButton>
      <PaginationButton onClick={() => handlePagination(currentPage + 1)} disabled={items.length < itemsPerPage}>
        Próximo
      </PaginationButton>
    </Container>
  );
};

export default HomePage;
