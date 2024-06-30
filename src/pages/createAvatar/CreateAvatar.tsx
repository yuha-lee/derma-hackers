import { Button, Radio, RadioGroup, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import * as styles from "./createAvatar.module.css";

function CreateAvatar() {
	const navigate = useNavigate();
	const register = () => navigate('/skinType');
  return <div className={styles.component}>
		<h2>Create Your Avatar</h2>
		<img src='assets/avatar.jpg' className={styles.avatar} />
		<div className={styles.userInfo}>
			<div className={styles.row}>
				<div className={styles.label}>Name:</div>
				<TextField autoFocus />
			</div>
			<div className={styles.row}>
				<div className={styles.label}>Age:</div>
				<TextField />
			</div>
			<div className={styles.row}>
				<div className={styles.label}>Skin Color:</div>
				<div className={styles.colorChipContainer}>
					<div className={`${styles.colorChip} ${styles.skin1}`}></div>
					<div className={`${styles.colorChip} ${styles.skin2}`}></div>
					<div className={`${styles.colorChip} ${styles.skin3}`}></div>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.label}>Hair Color:</div>
				<div className={styles.colorChipContainer}>
					<div className={`${styles.colorChip} ${styles.hair1}`}></div>
					<div className={`${styles.colorChip} ${styles.hair2}`}></div>
					<div className={`${styles.colorChip} ${styles.hair3}`}></div>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.label}>Eye Color:</div>
				<div className={styles.colorChipContainer}>
					<div className={`${styles.colorChip} ${styles.eye1}`}></div>
					<div className={`${styles.colorChip} ${styles.eye2}`}></div>
					<div className={`${styles.colorChip} ${styles.eye3}`}></div>
				</div>
			</div>
		</div>
		<div className={styles.footer}>
			<Button variant="contained" color="primary" onClick={register}>Register</Button>
		</div>
	</div>;
}

export default CreateAvatar;
