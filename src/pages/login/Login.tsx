import { Button, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import * as styles from './login.module.css';

function Login() {
	const navigate = useNavigate();
	
	const login = () => {
		navigate('/main');
	};
	
	const register = () => {
		navigate('/register');
	}

  return <div className={styles.component}>
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
				Log in
			</Button>
			<Button variant="outlined" onClick={register}>
				Register
			</Button>
		</div>
	</div>;
}

export default Login;
