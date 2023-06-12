import FieldComponent from "../ui/field/fieldComponent";
import {Settings, VariantClass} from "../../interfaces/formInterfaces";
import React, {useState} from "react";
import {
    validationPassword,
    validationEmail,
    validationNikName,
    validationRepeatPassword
} from "../../validation/validation";
import {FormSubmit} from "./formSubmit";

export default function SignUp(): React.JSX.Element{
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
    const confirmPasswordSettings: Settings = {
        placeholder: '********',
        description: "repeat your password",
        label: 'Your Password',
        error: "the 'password' field must include letters and numbers and must coincide with your password",
        variant: VariantClass.Default,
        disabled: false,
        asterisk: true,
        type: "password"
    }
    const nikSettings: Settings = {
        label: 'Your NikName',
        error: "the 'nik' field must has length more 2 letter",
        variant: VariantClass.Default,
        disabled: false,
        asterisk: true,
        type: "text"
    };
    const nameSettings: Settings = {
        label: 'Your Name',
        error: "the 'name' field must has length more 2 letter",
        variant: VariantClass.Default,
        disabled: false,
        asterisk: true,
        type: "text"
    };

    const [nikField, setNikField] = useState('');
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passField, setPassField] = useState('');
    const [pass2Field, setPass2Field] = useState('');
    const[gender, setGender] =useState("")

    const [validNik, setValidNik] = useState(true);
    const [validName, setValidName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validPass, setValidPass] = useState(true);
    const [validPass2, setValidPass2] = useState(true);
    const submit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        e.stopPropagation();

        const emV =  validationEmail(emailField);
        const psV = validationPassword(passField);
        const psV2 = validationRepeatPassword(pass2Field, passField);
        const niV = validationNikName(nikField);
        const naV = validationNikName(nameField);

        setValidEmail(emV);
        setValidPass(psV);
        setValidPass2(psV2);
        setValidNik(niV);
        setValidName(naV);

        setTimeout(()=>{
            setValidEmail(true);
            setValidPass(true);
            setValidPass2(true);
            setValidNik(true);
            setValidName(true);
        }, 3000)

        if (emV && psV && niV && psV2 && gender){
            setEmailField("");
            setPassField("");
            setPass2Field("");
            setNikField("");
            setNameField("");
            setGender("")

            const data = {
                nik: nikField,
                name: nameField,
                email: emailField,
                password: passField,
                gender: gender,
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
                        uiSettings={nameSettings}
                        value={nameField}
                        valid={validName}
                        inputHandler={(v:string)=>setNameField(v)}
                    />
                    <FieldComponent
                        uiSettings={nikSettings}
                        value={nikField}
                        valid={validNik}
                        inputHandler={(v:string)=>setNikField(v)}
                    />
                    <FieldComponent
                        uiSettings={emailSettings}
                        value={emailField}
                        valid={validEmail}
                        inputHandler={(v:string)=>setEmailField(v)}
                    />
                        <span>Yur gender</span><br/><br/>
                        <span>male</span>
                        <input className="px-2"  type="radio" name="gender" onClick={()=>setGender('male')} required value="male"/>
                        <br/>
                        <span>female</span>
                        <input className="px-2" type="radio"  name="gender" onClick={()=>setGender('female')} required value="female"/>
                    <FieldComponent
                        uiSettings={passwordSettings}
                        value={passField}
                        valid={validPass}
                        inputHandler={(v:string)=>setPassField(v)}
                    />
                    <FieldComponent
                        uiSettings={confirmPasswordSettings}
                        value={pass2Field}
                        valid={validPass2}
                        inputHandler={(v:string)=>setPass2Field(v)}
                    />

                </div>
                <button className={'px-5 py-2'} type="submit"> submit form </button>
            </form>
        </>
    )
}
