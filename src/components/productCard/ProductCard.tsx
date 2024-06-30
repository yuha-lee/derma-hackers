import { Card, CardActionArea, CardContent, CardMedia, Chip, IconButton, StylesProvider, Typography } from "@material-ui/core";
import * as styles from "./productCard.module.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface ProductProps {
	link: string;
	type: string;
	img: string;
	title: string;
	labels: string[];
	rating: string;
	rating_num: string;
}

function ProductCard(props: ProductProps) {
	const { link, img, title } = props;

	return <a href={link}>
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
					width="120"
          height="100"
          image={img}
        />
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="body2" component="div" className={styles.title}>
            {title}
          </Typography>
          <IconButton color="primary" className={styles.cart}>
            <AddShoppingCartIcon />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
	</a>;
}

export default ProductCard;