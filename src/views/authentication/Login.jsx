import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toggle from "../../components/theme/ThemeToggle";
import AuthContext from "../../context/auth/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthForm from "../../components/auth/AuthForm";

const Login = () => {
	const { login } = useContext(AuthContext);

	const [passwordShow, setPasswordShow] = useState(false);

	const togglePasswordShow = () => {
		setPasswordShow(passwordShow ? false : true);
	};

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: Yup.object({
			username: Yup.string().required("Campo requerido"),
			password: Yup.string().required("Campo requerido"),
		}),
		onSubmit: async values => {
			const { username, password } = values;

			let payload = {
				username,
				password,
			};
			try {
				await login(payload);
			} catch (error) {
				toast.error(error.response.data.detail);
			}
		},
	});

	return (
		<AuthForm
			formik={formik}
			passwordShow={passwordShow}
			togglePasswordShow={togglePasswordShow}
		/>
	);
};

export default Login;
