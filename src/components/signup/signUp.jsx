import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

function Signup() {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log("data", data);
    };
    console.log("errors", errors);
    console.log(watch());

    // gender select options
    const options = [
        { val: 1, label: "Male" },
        { val: 2, label: "Female" },
    ];

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="container w-25 mt-5">
            {/* user name */}
            <Form.Group className="mb-3" controlId="userName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="User name"
                    {...register("username", { required: true, maxLength: 8 })}
                />

                {errors?.username?.type === "required" && (
                    <p className="text-danger">user name is required</p>
                )}
                {errors?.username?.type === "maxLength" && (
                    <p className="text-danger">max letters are 8</p>
                )}
            </Form.Group>
            {/* email */}
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
            {/*confirm password  */}
            <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("ConfirmPassword", {
                        required: true,
                        // pattern:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*@%$#]).{8,}$/,
                        validate: (value) => {
                            const pass = watch().password;
                            return pass === value || "is not matching";
                        },
                    })}
                />
                {errors?.ConfirmPassword?.type === "required" && (
                    <p className="text-danger">This Field is required</p>
                )}
                {errors?.ConfirmPassword?.type === "validate" && (
                    <p className="text-danger">Passwords are not matching</p>
                )}
            </Form.Group>
            {/* gender */}
            <Controller
                name="select"
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        {...register('genderSelect',{required: true})}
                        options={options}
                    />
                )}
            />
            {
                errors?.genderSelect?.type === "required" && (
                    <p className="text-danger"> This field is required</p>
                )
            }
            {/* check box */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label="agree to all terms and conditions"
                    {...register("agreeCheck", { required: true })}
                />
                {errors?.agreeCheck?.type === "required" && (
                    <p className="text-danger">This field is required</p>
                )}
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Signup;
