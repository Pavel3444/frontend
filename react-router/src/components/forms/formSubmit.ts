import {IFormRequest} from "../../interfaces/formInterfaces";

export class FormSubmit {

        name: null|string;
        nik:  null|string;
        email: null|string;
        gender: null|string;
        password: null|string;


    constructor(fields:IFormRequest) {
        this.name = fields.name || null;
        this.nik = fields.nik || null;
        this.email = fields.email;
        this.gender = fields.gender || null;
        this.password = fields.password;
    }
}