
import './error.css';

type ErrorProps = {
    message?: string;
    type?: 'warn' | 'error'
}

export const Error = ({ message = "Something went wrong. Please try again later." }: ErrorProps) => {

    return (<div className="error">{message}</div>)
}