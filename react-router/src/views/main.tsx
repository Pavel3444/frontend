import SignIn from "../components/forms/signIn";
import SignUp from "../components/forms/signUp";
export default function MainPage(): React.JSX.Element {
 return (
        <div className="Home">
            <h1>Приветствие</h1>
            <br/>
            <br/>
            <br/>
            <SignIn/>
            {/*<SignUp/>*/}
        </div>
    )
}