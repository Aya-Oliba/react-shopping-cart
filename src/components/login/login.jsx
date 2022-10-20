import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";


function Login () {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log("data", data);
    };
    return(
        <Form onSubmit={handleSubmit(onSubmit)} className="container w-25 mt-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...register("email", {
                        required: true,
                        pattern:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                />
                {errors?.email?.type === "required" && (
                    <p className="text-danger">This Field is required</p>
                )}
                {errors?.email?.type === "pattern" && (
                    <p className="text-danger">example test@domainname.com</p>
                )}
            </Form.Group>
            {/*password  */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("Password", {
                        required: true,
                        pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*@%$#]).{8,}$/,
                    })}
                />
                {errors?.Password?.type === "required" && (
                    <p className="text-danger">This Field is required</p>
                )}
                {errors?.Password?.type === "pattern" && (
                    <p className="text-danger">
                        password should be not less than 8 ,should include at least one
                        UpperCase, 1 digit and 1 special character
                    </p>
                )}
            </Form.Group>
            <Button className="mt-5" variant="primary" type="submit">
                Submit
            </Button>
        </Form>   
    )        
}
export default Login