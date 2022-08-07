import ResourceDto from "../../dtos/ResourceDto";
import UserDto from "../../dtos/UserDto";

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
            <div>
                <div>
                    <b>User ID:</b> {userProps.id}
                </div>
                <div>
                    <b>First name:</b> {userProps.first_name}
                </div>
                <div>
                    <b>Last name:</b> {userProps.last_name}
                </div>
                <div>
                    <b>Email:</b> {userProps.email}
                </div>
                <div>
                    <b>Avatar: </b> {userProps.avatar}
                </div>
            </div>
        );
    } else if (resourceProps.color) {
        html = (
            <div>
                <div>
                    <b>Resource ID:</b> {resourceProps.id}
                </div>
                <div>
                    <b>Name:</b> {resourceProps.name}
                </div>
                <div>
                    <b>Pantone value:</b> {resourceProps.pantone_value}
                </div>
                <div>
                    <b>Year:</b> {resourceProps.year}
                </div>
                <div>
                    <b>Color: </b> {resourceProps.color}
                </div>
            </div>
        );
    }

    return html;
};

export default ListComponent;
