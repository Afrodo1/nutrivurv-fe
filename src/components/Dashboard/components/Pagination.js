import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchFood, Next } from "../../../state/slices/EdamamSlice";
import Pagination from "react-bootstrap/Pagination";

const ItemPagination = ({ itemArr, setItemArr }) => {
  const { items, pagination, pageArr, prevPage } = useSelector(
    (state) => state.edamam
  );
  const [number, setNumber] = useState(1);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const arr = [1, 2, 3, 6];
  return (
    <Pagination bg="light" className="justify-content-center mt-3">
      <Pagination.Ellipsis
        disabled={arr[0] === pageArr[0]}
        onClick={() => {
          setActive(!active);
          dispatch(searchFood(null, prevPage[0]));
          console.log(pagination);
          dispatch(Next(Array.from(pageArr, (x) => x - 3)));
        }}
      />
      <Pagination.Item
        bg="light"
        active={number === pageArr[0]}
        onClick={(e) => {
          setItemArr(items.slice(0, 8));
          setNumber(pageArr[0]);
        }}
      >
        {pageArr[0]}
      </Pagination.Item>
      <Pagination.Item
        active={number === pageArr[1]}
        onClick={(e) => {
          setNumber(pageArr[1]);
          setItemArr(items.slice(8, 16));
        }}
      >
        {pageArr[1]}
      </Pagination.Item>
      <Pagination.Item
        active={number === pageArr[2]}
        onClick={(e) => {
          setNumber(pageArr[2]);
          setItemArr(items.slice(16, 21));
        }}
      >
        {pageArr[2]}
      </Pagination.Item>
      <Pagination.Ellipsis
        disabled={arr[3] === pageArr[2]}
        onClick={() => {
          dispatch(searchFood(null, pagination.next.href));
          dispatch(Next(Array.from(pageArr, (x) => 3 + x)));
        }}
      />
    </Pagination>
  );
};

export default ItemPagination;
