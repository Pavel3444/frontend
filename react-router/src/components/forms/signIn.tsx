import FieldComponent from "../ui/field/fieldComponent";
import {Settings, VariantClass} from "../../interfaces/formInterfaces";
import React, {useState} from "react";
import {validationPassword, validationEmail} from "../../validation/validation";
import {FormSubmit} from "./formSubmit";

export default function SignIn(): React.JSX.Element{
    const emailSettings: Settings = {
        placeholder: 'input your email',
        label: 'Your Email',
        error: "field 'email' is incorrect",
        variant: VariantClass.Unstyled,
        radius: 5,
        size: 1,
        disabled: false,
        asterisk: true,
        type: "text"
    };
    const passwordSettings: Settings = {
        placeholder: '********',
        description: "input your password",
        label: 'Your Password',
        error: "the 'password' field must include letters and numbers",
        variant: VariantClass.Default,
        radius: 5,
        size: 1,
        disabled: false,
        asterisk: true,
        type: "password"
    }
    const [emailField, setEmailField] = useState('');
    const [passField, setPassField] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [validPass, setValidPass] = useState(true);
    const submit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        e.stopPropagation();
         const emV =  validationEmail(emailField);
         const psV = validationPassword(passField);
        setValidEmail(emV);
        setValidPass(psV);
        setTimeout(()=>{
            setValidEmail(true);
            setValidPass(true);
        }, 3000)

        if (emV && psV){
            setEmailField("");
            setPassField("");
            const data = {
                email: emailField,
                password: passField,
            }
            const req = new FormSubmit(data);
            console.log('form has submit!', req);
        }

    };
    return(
        <>
            <form action="" onSubmit={submit}>
                <div style={{width: "500px"}}>
                    <FieldComponent
                        uiSettings={emailSettings}
                        value={emailField}
                        valid={validEmail}
                        inputHandler={(v:string)=>setEmailField(v)}
                    />
                    <FieldComponent
                        uiSettings={passwordSettings}
                        value={passField}
                        valid={validPass}
                        inputHandler={(v:string)=>setPassField(v)}
                    />
                </div>
                <button className={'px-5 py-2'} type="submit"> submit form </button>
            </form>
        </>
    )
}