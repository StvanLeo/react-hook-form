import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object(
    {
        name: yup.string().required("This field is required"),
        age: yup.number().required("This field is required").min(18, "Must be over 18 years old")
    }
).required();

const YupForm = () => {
    const { register, handleSubmit, formState: { errors }  } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="">Name:</label>
                    <input type="text" {...register("name")} />
                    <br />
                    { errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" {...register("age")} />
                    <br />
                    { errors.age && <span>{errors.age.message}</span>}
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </>
    )
};

export default YupForm;