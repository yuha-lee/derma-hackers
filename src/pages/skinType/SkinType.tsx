import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import * as styles from "./skinType.module.css";

function SkinType() {
	const navigate = useNavigate();
	const test = () => navigate('/test');
	const main = () => navigate('/main');

  return <div className={styles.component}>
		<h2>Choose your skin type</h2>
		<div className={styles.tiles}>
			<div className={`${styles.tile} ${styles.sensitive}`}>SENSITIVE</div>
			<div className={`${styles.tile} ${styles.dry}`}>DRY</div>
			<div className={`${styles.tile} ${styles.matured}`}>MATURED</div>
			<div className={`${styles.tile} ${styles.oily}`}>OILY</div>
			<div className={`${styles.tile} ${styles.normal}`}>NORMAL</div>
		</div>
		<h3 className={styles.message}>Not sure about your skin type?<br />Take the test.</h3>
		<Button variant="contained" color="primary" onClick={test}>Test</Button>
		<Button onClick={main} className={styles.skip}>Skip</Button>
	</div>;
}

export default SkinType;
