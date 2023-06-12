import {FieldProps, VariantClass} from "../../../interfaces/formInterfaces";
import './field.scss';
export default function FieldComponent(props: FieldProps): React.JSX.Element {
    const {
        placeholder="",
        label="",
        description="",
        error="",
        variant = VariantClass.Default,
        radius= 0,
        size= 1,
        disabled= false,
        asterisk= false,
        type = 'text'
    } = props.uiSettings;

    return (
        <div className={'text__field'} style={{zoom: size}}>
            <label>
                {label && <span className={`text__label ${asterisk? "asterisk": ""}`}>{label}</span>}
                <p className={'text__p'}>{description}</p>
                <input
                    placeholder={placeholder}
                    disabled={disabled}
                    style={{borderRadius: radius}}
                    value={props.value}
                    type={type}
                    onInput={(e)=>props.inputHandler(e.currentTarget.value)}
                    className={`${variant} ${!props.valid ? 'error': ''}`}
                />
                 <span className="error">{!props.valid ? error : null}</span>
            </label>
        </div>
    )
}