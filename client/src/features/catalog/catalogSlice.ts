import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import { RootState } from "../store/configureStore";

const productsAdaptor = createEntityAdapter<Product>();

export const fetchProductAsync = createAsyncThunk<Product[]>(
    "catalog/fetchProductAsync",
    async () => {
        try {
            return await agent.Catalog.list();
        } catch (error) {
            console.log(error);
        }
    }
);

export const catalogSlice = createSlice({
    name: "catalog",
    initialState: productsAdaptor.getInitialState({
        prouctsLoaded: false,
        status: "idle"
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductAsync.pending, (state) => {
            state.status = "pendingFetchProducts";
        });
        builder.addCase(fetchProductAsync.fulfilled, (state,action)=>{
            productsAdaptor.setAll(state, action.payload);
            state.status ='idle';
            state.prouctsLoaded = true
        })
        builder.addCase(fetchProductAsync.rejected, (state) => {
            state.status = "idle";
        });
    },
});

export const productSelectors = productsAdaptor.getSelectors((state:RootState)=> state.catalog)