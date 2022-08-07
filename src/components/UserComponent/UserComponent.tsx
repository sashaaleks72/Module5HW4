import { useEffect, useState } from "react";
import UserResponse from "../../dtos/UserResponse";
import { getUserListByPage } from "../../http/fetches";
import ListComponent from "../ListComponent/ListComponent";
import classes from "./UserComponent.module.css";

const UserComponent = () => {
    const [userList, setUserListToState] = useState<UserResponse>();

    useEffect(() => {
        const init = async () => {
            const userList: UserResponse = await getUserListByPage();
            setUserListToState(userList);
        };

        init();
    }, []);

    return (
        <div className={classes.userBlock}>
            <div>
                <b>Page:</b> {userList?.page}
            </div>
            <div>
                <b>Per page:</b> {userList?.per_page}
            </div>
            <div>
                <b>Total:</b> {userList?.total}
            </div>
            <div>
                <b>Total pages:</b> {userList?.total_pages}
            </div>
            <div>
                <b>Users: </b>
                {userList?.data.map((user, index) => {
                    return (
                        <ListComponent
                            key={index}
                            id={user.id}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            email={user.email}
                            avatar={user.avatar}
                        ></ListComponent>
                    );
                })}
            </div>
        </div>
    );
};

export default UserComponent;
