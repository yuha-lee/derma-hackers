import { Button, Checkbox, Dialog, DialogContent, DialogTitle, FormControlLabel, FormGroup, IconButton } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import * as styles from "./habitTrackerDialog.module.css";

interface HabitTrackerDialogProps {
	onFinish: (points: number) => void;
}

const HabitTrackerDialog = (props: HabitTrackerDialogProps): JSX.Element => {
	const [open, setOpen] = useState(false);
	const [achievedGoals, setAchievedGoals] = useState(0);
	const [rewardCollected, setRewardCollected] = useState(false);
	const dummyData = [
		'Drink at least 8 glasses of water',
		'Cleanse, tone, and moisturize your skin twice',
		'Apply sunscreen',
		'Eat plenty of fruits and vegetables',
		'Get 7-9 hours of quality sleep'
	];

	const onCheck = (e: any) => setAchievedGoals(achievedGoals + ((e?.target as HTMLInputElement).checked ? 1 : -1));

	const collectRewards = () => {
		setRewardCollected(true);
		props.onFinish(15);
		setOpen(false);
	};

	return <>
		<Button className={styles.button} variant="contained" color="primary" onClick={() => setOpen(true)}>
			Check your habits
		</Button>
		<Dialog open={open} keepMounted={true}>
			<DialogTitle className={styles.dialogTitleWrapper}>
				<div className={styles.dialogTitle}>
					<b>Daily Habits</b>
					<IconButton onClick={() => setOpen(false)} className={styles.closeBtn}>
						<CloseIcon />
					</IconButton>
				</div>
			</DialogTitle>
			<DialogContent>
				<div className={`${rewardCollected ? styles.finished : undefined} ${styles.dialogContent}`}>
					<FormGroup>
						{dummyData.map(goal => <FormControlLabel key={goal} control={<Checkbox />} label={goal} onChange={onCheck} />)}
					</FormGroup>
					{achievedGoals === dummyData.length ? <Button variant="contained" color="primary" className={styles.moreHappinessBtn} onClick={collectRewards}>More happiness</Button>: undefined}
				</div>
			</DialogContent>
		</Dialog>
	</>;
}

export default HabitTrackerDialog;