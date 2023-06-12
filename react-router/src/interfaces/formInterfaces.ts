export enum VariantClass{
    Default = "Default",
    Filled = "Filled",
    Unstyled = "Unstyled"
}
export interface Settings{
    placeholder?:string;
    label?: string;
    description?: string;
    error?: string;
    variant?: VariantClass;
    radius?: number;
    size?: number;
    disabled?: boolean;
    asterisk?: boolean;
    type?: string;
}
export interface FieldProps{
    uiSettings: Settings;
    value: string;
    valid: boolean;
    inputHandler: (v: string) => void;
}
export interface IFormRequest {
    name?: string;
    nik?: string;
    email: string;
    gender?: string;
    password: string;
    confirmPassword?: string;
}