import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import { RootState } from "../store/configureStore";

const productsAdaptor = createEntityAdapter<Product>();

export const fetchProductsAsync = createAsyncThunk<Product[]>(
    "catalog/fetchProductsAsync",
    async (_, thunkAPI) => {
        try {
            return await agent.Catalog.list();
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);

export const fetchProductAsync = createAsyncThunk<Product, number>(
    "catalog/fetchProductAsync",
    async (productId, thunkAPI) => {
        try {
            return await agent.Catalog.details(productId);
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);

export const catalogSlice = createSlice({
    name: "catalog",
    initialState: productsAdaptor.getInitialState({
        prouctsLoaded: false,
        status: "idle",
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductsAsync.pending, (state) => {
            state.status = "pendingFetchProducts";
        });
        builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
            productsAdaptor.setAll(state, action.payload);
            state.status = "idle";
            state.prouctsLoaded = true;
        });
        builder.addCase(fetchProductsAsync.rejected, (state,action) => {
            console.log(action.payload)
            state.status = "idle";
        });

        builder.addCase(fetchProductAsync.pending, (state) => {
            state.status = "pendingFetchProduct";
        });
        builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
            productsAdaptor.upsertOne(state, action.payload);
            state.status = "idle";
            state.prouctsLoaded = true;
        });
        builder.addCase(fetchProductAsync.rejected, (state, action) => {
            state.status = "idle";
        });
    },
});

export const productSelectors = productsAdaptor.getSelectors(
    (state: RootState) => state.catalog
);
