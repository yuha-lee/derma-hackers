import { Button, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import * as styles from './login.module.css';

function Login() {
	const navigate = useNavigate();
	const login = () => navigate('/main');
	const createAvatar = () => navigate('/createAvatar');

  return <div className={styles.component}>
		<img src="assets/main.png" className={styles.mainImg} />
		<div className={styles.form}>
			<TextField
				autoFocus
				id="id"
				label="ID"
				fullWidth
			/>
			<TextField
				id="password"
				label="Password"
				type="password"
				fullWidth
			/>
			<div className={styles.buttons}>
				<Button variant="contained" color="primary" onClick={login}>
					Login
				</Button>
				<Button variant="outlined" color="primary" onClick={createAvatar}>
					Registration
				</Button>
			</div>
		</div>
	</div>;
}

export default Login;
