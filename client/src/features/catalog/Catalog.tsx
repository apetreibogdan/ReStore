import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { fetchProductAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";

export default function Catalog() {
    const products = useAppSelector(productSelectors.selectAll);
    const dispatch = useAppDispatch();

    useEffect(() => {
         dispatch(fetchProductAsync());
    }, []);

    return (
        <>
            <ProductList products={products} />
        </>
    );
}
