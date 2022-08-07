import AuthResponse from "../dtos/AuthResponse";
import ResourceDto from "../dtos/ResourceDto";
import ResourceResponse from "../dtos/ResourceResponse";
import UserDto from "../dtos/UserDto";
import UserResponse from "../dtos/UserResponse";

const apiUrl = "https://reqres.in";

export const getUser = async (): Promise<UserDto> => {
    const result: Response = await fetch(`${apiUrl}/api/users/2`);
    const response = await result.json();

    const user: UserDto = response.data;

    console.log(user);
    return user;
};

export const getUserListByPage = async (): Promise<UserResponse> => {
    const result: Response = await fetch(`${apiUrl}/api/users?page=2`);
    const response = await result.json();

    const userList: UserResponse = response;

    console.log(userList);
    return userList;
};

export const getResource = async (): Promise<ResourceDto> => {
    const result: Response = await fetch(`${apiUrl}/api/unknown/2`);
    const response = await result.json();

    const resource: ResourceDto = response.data;

    console.log(resource);
    return resource;
};

export const getResourceListByPage = async (): Promise<ResourceResponse> => {
    const result: Response = await fetch(`${apiUrl}/api/unknown`);
    const response = await result.json();

    const resourceList: ResourceResponse = response;

    console.log(resourceList);
    return resourceList;
};

export const register = async (
    email: string,
    password: string
): Promise<AuthResponse> => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    };

    const response = await fetch(`${apiUrl}/api/register`, requestOptions);

    const token: AuthResponse = await response.json();

    console.log(token);
    return token;
};

export const login = async (
    email: string,
    password: string
): Promise<AuthResponse> => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    };

    const response = await fetch(`${apiUrl}/api/login`, requestOptions);

    const token: AuthResponse = await response.json();

    console.log(token);
    return token;
};
