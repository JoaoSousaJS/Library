import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;

  background: #fff;
  border-radius: 4px;

  button,
  select {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }
  }
  strong {
    color: #333;
    display: block;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    padding: 6px;
  }
`;

export const BookTable = styled.table`
  width: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);

  tbody td {
    padding: 12px;

    align-items: left;
    align-self: left;
    text-align: left;
    justify-content: space-between;
  }

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
`;

export const BookForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);

  input {
    background: #999;
    border: 0;
    margin: 0 0 10px;
    border-radius: 4px;
  }
`;
