import { Button } from "@material-ui/core";
import TollIcon from '@mui/icons-material/Toll';
import * as styles from './point.module.css';

interface PointProps {
	value: number;
}

function Point(props: PointProps) {
	return <Button
		component="label"
		role={undefined}
		variant="contained"
		color="primary"
		tabIndex={-1}
		startIcon={<TollIcon />}
		className={styles.button}
	>
		{props.value} points
	</Button>
}

export default Point;