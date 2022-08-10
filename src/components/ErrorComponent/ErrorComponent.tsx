import ErrorResponse from "../../dtos/ErrorResponse";

type Props = {
    code?: number;
};

const ErrorComponent = (props: Props): JSX.Element => {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
                Something went wrong! Error code: {props.code}
            </div>
        </div>
    );
};

export default ErrorComponent;
