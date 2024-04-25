import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  text-align: center;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 16px;
  color: black;
  font-weight: bold;
`;

export const Value = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: black;
  font-weight: bold;
`;

export const ValuePer = styled.span`
  font-size: 12px;
  color: #666;
`;
