import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({name: "", email: "", password: ""});

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(prev => ({...prev, [name]: value,}));

        setErrors(prevErrors => { 
            const upDatedErrors = {...prevErrors};

        if(name === "name" && value.trim()){
            delete upDatedErrors.name;
        }

        if(name === "email" && value.trim()){
            delete upDatedErrors.email;
        }

        if(name === "password" && value.length >= 6){
            delete upDatedErrors.password;
        }

        return upDatedErrors;
    })
    }

    const validate = () => {
        const newErrors = {};
        if(!formData.name.trim()){
            newErrors.name = "name is required";
        }

        if(!formData.email.trim()){
            newErrors.email = "email is required";
        }

        if(!formData.password.trim()){
            newErrors.password = "password is required";
        }else if(formData.password.length < 6){
            newErrors.password = "password lenght must be greater than 6 charaters";
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validateErrors = validate();
        setErrors(validateErrors);
        if(Object.keys(validateErrors).length === 0){
            submitForm();
        }

    }
    const submitForm = () => {
        setIsSubmitted(true);
        setFormData({name: "", email: "", password: ""});
        // alert("form submitted successfully");
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
            </div>

            <div>
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div>

            <div>
                <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default RegistrationForm;