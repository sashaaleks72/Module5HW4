type UserProps = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

type ResourceProps = {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
};

const ListComponent = (props: UserProps | ResourceProps): JSX.Element => {
    let html: JSX.Element = <h2>Not found</h2>;

    let userProps = props as UserProps;
    let resourceProps = props as ResourceProps;

    if (userProps.email) {
        html = (
            <tr>
                <td>{userProps.id}</td>
                <td>{userProps.first_name}</td>
                <td>{userProps.last_name}</td>
                <td>{userProps.email}</td>
                <td>{userProps.avatar}</td>
            </tr>
        );
    } else if (resourceProps.color) {
        html = (
            <tr>
                <td>{resourceProps.id}</td>
                <td>{resourceProps.name}</td>
                <td>{resourceProps.pantone_value}</td>
                <td>{resourceProps.year}</td>
                <td>{resourceProps.color}</td>
            </tr>
        );
    }

    return html;
};

export default ListComponent;
