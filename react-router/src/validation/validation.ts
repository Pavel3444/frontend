export function validationPassword(val: string){
    const numberPattern = /[0-9]/;
    const letterPattern = /[a-zA-Z]/;

    return numberPattern.test(val) && letterPattern.test(val);

}export function validationRepeatPassword(val: string, firstVal: string){
    const numberPattern = /[0-9]/;
    const letterPattern = /[a-zA-Z]/;

    return numberPattern.test(val) && letterPattern.test(val) && val === firstVal;
}
export function validationEmail (val:string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return  emailPattern.test(val);
}
export function validationNikName(val: string): boolean {
    return (val.length > 1);
}
