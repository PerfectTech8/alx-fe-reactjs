import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({username: "", email: "", password: ""});

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(prev => ({...prev, [name]: value,}));

        setErrors(prevErrors => { 
            const upDatedErrors = {...prevErrors};

        if(name === "username" && value.trim()){
            delete upDatedErrors.username;
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
        if(!username){
            newErrors.name = "name is required";
        }

        if(!email){
            newErrors.email = "email is required";
        }

        if(!password){
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
        setFormData({username: "", email: "", password: ""});
        // alert("form submitted successfully");
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="username" value={username} onChange={handleChange}/>
                    {errors.name && <p style={{color:'red'}}>{errors.username}</p>}
            </div>

            <div>
                <input type="email" name="email" value={email} onChange={handleChange}/>
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div>

            <div>
                <input type="password" name="password" value={password} onChange={handleChange}/>
                {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default RegistrationForm;