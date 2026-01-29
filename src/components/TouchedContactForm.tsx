import { useForm } from "react-hook-form";

const TouchedContactForm = () => {
    const { register, handleSubmit, formState: { errors, touchedFields }  } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" 
                        {...register("name", {required: "This field is required"})} />
                    <br/>
                    {touchedFields.name && errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" {...register("email", {
                        required: "This field is required", 
                        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                        message: "The email format is invalid."}})} />
                    <br/>
                    {touchedFields.email && errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message"
                        {...register("message", {required: "This field is required", 
                            minLength: {value: 10, message: "The message must be at least 20 characters long"}
                        })}>
                    </textarea>
                    <br/>
                    {touchedFields.message && errors.message && <span>{errors.message.message}</span>}
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </>
    )
};

export default TouchedContactForm;