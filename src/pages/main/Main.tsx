import HabitTrackerDialog from "components/habitTrackerDialog/HabitTrackerDialog";
import * as styles from "./main.module.css";
import HappinessBar from "components/happinessBar/HappinessBar";
import Point from "components/point/Point";
import { useState } from "react";
import { IconButton } from "@material-ui/core";
import StarsIcon from '@mui/icons-material/Stars';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Main() {
	const [happiness, setHappiness] = useState(70);
	const [points, setPoints] = useState(123);
  return <div className={styles.main}>
		<Point value={points} />
		<HappinessBar value={happiness} />
		<IconButton color="primary" className={styles.cup} size="medium"><EmojiEventsIcon /></IconButton>
		<IconButton color="primary" className={styles.star} size="medium"><StarsIcon /></IconButton>
		<div className={styles.avatarContainer}>
			<img src='assets/avatar.jpg' className={styles.avatar} />
		</div>
		<HabitTrackerDialog onFinish={(addedPoints: number) => {
			setHappiness(happiness + addedPoints);
			setPoints(points + addedPoints);
		}} />
	</div>;
}

export default Main;
