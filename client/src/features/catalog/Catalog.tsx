import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";

export default function Catalog() {
    const products = useAppSelector(productSelectors.selectAll);
    const dispatch = useAppDispatch();

    useEffect(() => {
         dispatch(fetchProductsAsync());
    }, [dispatch]);

    return (
        <>
            <ProductList products={products} />
        </>
    );
}
