import { LoadingButton } from "@material-ui/lab";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import { addBasketItemAsync } from "../basket/basketSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

interface Props {
    product: Product;

}
export default function ProductCard({ product }: Props) {
    const {status}= useAppSelector(state =>state.basket);  
    const dispatch = useAppDispatch()


    return (

        <Card >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "secondary.main" }}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: { fontWeight: 'bold', color: 'primary.main' }
                }}
            />

            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain', bgcolor: "primary.main" }}
                component="img"
                image={product.pictureUrl}
                title={product.name} 
            />
            <CardContent>
                <Typography gutterBottom color="secondary" variant="h5" >
                    ${(product.price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} - {product.type} 
                </Typography>
            </CardContent>
            <CardActions>
                <LoadingButton loading={status.includes('pending')}
                    onClick={() => dispatch(addBasketItemAsync({productId:product.id}))}
                    size="small">Add to cart</LoadingButton>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
            </CardActions>
        </Card>
    )
}