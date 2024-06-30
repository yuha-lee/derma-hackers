import LinearProgress from '@mui/material/LinearProgress';
import * as styles from './happinessBar.module.css';

interface HappinessBarProps {
	value: number;
}

function HappinessBar(props: HappinessBarProps) {
	return <LinearProgress variant="determinate" value={props.value} className={styles.bar} />;
}

export default HappinessBar;