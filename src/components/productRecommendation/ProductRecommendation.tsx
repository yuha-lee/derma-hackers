import data from "./dummy.json";
import ProductCard from "components/productCard/ProductCard";
import * as styles from "./productRecommendation.module.css";
import { useNavigate } from "react-router-dom";
import { Button, Chip } from "@material-ui/core";

interface ProductRecommendationProps {
	type: string;
}

function ProductRecommendation(props: ProductRecommendationProps) {
	const { type } = props;
	const navigate = useNavigate();
	const main = () => navigate('/main');
	
	return <>
		<h2 className={styles.title}>Recommendation</h2>
		<div className={styles.chip}><Chip label={type} color="primary" /></div>
		<div className={styles.container}>
			{data.map(d => <ProductCard key={d.title} {...d} />)}
		</div>
		<Button className={styles.skip} onClick={main}>skip</Button>
	</>;
}

export default ProductRecommendation;