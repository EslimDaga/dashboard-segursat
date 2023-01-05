import { Helmet, HelmetProvider } from "react-helmet-async";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthContext from "../../context/auth/AuthProvider";
import toast from "react-hot-toast";
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
		<HelmetProvider>
			<Helmet>
				<title>Iniciar Sesión - Segursat</title>
			</Helmet>
			<AuthForm
				formik={formik}
				passwordShow={passwordShow}
				togglePasswordShow={togglePasswordShow}
			/>
		</HelmetProvider>
	);
};

export default Login;
