import { Box } from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
import { Add, Delete, Remove } from "@mui/icons-material";
import {
    Button,
    Grid,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { removeBasketItemAsync, addBasketItemAsync } from "./basketSlice";
import BasketSumary from "./BasketSumary";

export default function Basketpage() {
    const { basket, status } = useAppSelector((state) => state.basket);
    const dispatch = useAppDispatch();

    if (!basket)
        return <Typography variant="h3">Your basket is empty</Typography>;

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.items.map((item) => (
                            <TableRow
                                key={item.productId}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box display="flex" alignItems="center">
                                        <img
                                            src={item.pictureUrl}
                                            alt={item.name}
                                            style={{
                                                height: 50,
                                                marginRight: 20,
                                            }}
                                        />
                                        <span>{item.name}</span>
                                    </Box>
                                </TableCell>
                                <TableCell align="right">
                                    ${(item.price / 100).toFixed(2)}
                                </TableCell>
                                <TableCell align="center">
                                    <LoadingButton
                                        loading={
                                            status ===
                                            "pandingRemoveItem" + item.productId + 'rem'
                                        }
                                        onClick={() =>
                                            dispatch(
                                                removeBasketItemAsync({
                                                    productId: item.productId,
                                                    quantity: 1,
                                                    name:'rem'
                                                })
                                            )
                                        }
                                        color="error"
                                    >
                                        <Remove />
                                    </LoadingButton>
                                    {item.quantity}
                                    <LoadingButton
                                        loading={
                                            status ===
                                            "pendingAddItem" + item.productId
                                        }
                                        onClick={() =>
                                            dispatch(
                                                addBasketItemAsync({
                                                    productId: item.productId,
                                                })
                                            )
                                        }
                                        color="secondary"
                                    >
                                        <Add />
                                    </LoadingButton>
                                </TableCell>
                                <TableCell align="right">
                                    {(
                                        (item.price / 100) *
                                        item.quantity
                                    ).toFixed(2)}
                                </TableCell>
                                <TableCell align="right">
                                    <LoadingButton
                                        loading={
                                            status ===
                                            "pendngRemoveItem" + item.productId + 'del'
                                        }
                                        onClick={() =>
                                            dispatch(
                                                removeBasketItemAsync({
                                                    productId: item.productId,
                                                    quantity: item.quantity,
                                                    name : 'del'
                                                })
                                            )
                                        }
                                        color="error"
                                    >
                                        <Delete />
                                    </LoadingButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSumary />
                    <Button
                        component={Link}
                        href="/checkout"
                        variant="contained"
                        size="large"
                        fullWidth
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}
