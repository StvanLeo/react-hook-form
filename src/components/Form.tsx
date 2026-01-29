import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, formState: { errors }  } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="">
                    Name
                    <input type="text" {...register("name", {required: "This field is required"})} />
                </label>
                <br />
                { errors.name && <span>{errors.name.message}</span>}
                <br />
                <label>
                    Age
                    <input type="number" {...register("age", {required: "This field is required", min: {value: 18, message: "Must be over 18 years old"}})} />
                    <br />
                    { errors.age && <span>{errors.age.message}</span>}
                </label>
                <br />
                <button type="submit">Send</button>
            </form>
        </>
    )
};

export default Form;