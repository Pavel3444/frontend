import {Component} from "react";

export default class ErrorBoundary extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state ={
            hasError: false
        }
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log('error: ',error)
        console.log('error info: ',errorInfo)
    }
    static getDerivedStateFromError(error){
        console.log('new error: ',error)
        return {hasError : true}

    }
    render() {
        if (this.state.hasError){
            return <h1>We have some problems...</h1>
        }
        return this.props.children;
    }
}