import {useFormik} from 'formik';
import {object, string} from 'yup'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";
import Container from '@mui/material/Container';
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../state/store.ts";
import {authorizationUserTC} from "../../state/app/appReducer.ts";


const validationSchema = object({
    email: string()
        .email('Must be a valid email')
        .required('Email is required'),

    password: string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});
export const Login = () => {
    const isAuth = useAppSelector(s => s.app.isAuth)
    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(authorizationUserTC(values))
        },
    });
    return isAuth
        ? <Navigate to="/"/>
        : (
            <div>
                <Container maxWidth='sm' style={{padding: '20px 0 0'}}>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            style={{marginBottom: '20px'}}
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            style={{marginBottom: '10px'}}
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <FormControlLabel
                            style={{marginBottom: '10px'}}
                            control={<Checkbox
                                checked={formik.values.rememberMe} {...formik.getFieldProps('rememberMe')}/>}
                            label={"Remember me"}/>
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
                    </form>
                </Container>
            </div>
        );
};
