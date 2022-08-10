import AuthResponse from "../dtos/AuthResponse";
import ErrorResponse from "../dtos/ErrorResponse";
import ResourceDto from "../dtos/ResourceDto";
import ResourceResponse from "../dtos/ResourceResponse";
import UserDto from "../dtos/UserDto";
import UserResponse from "../dtos/UserResponse";

const apiUrl = "https://reqres.in";

export const getUser = async (): Promise<UserDto> => {
    const result: Response = await fetch(`${apiUrl}/api/users/2`);
    const response = await result.json();

    const user: UserDto = response.data;

    return user;
};

export const getUserListByPage = async (): Promise<UserResponse> => {
    const result: Response = await fetch(`${apiUrl}/api/users?page=2`);
    const response = await result.json();

    const userList: UserResponse = response;

    return userList;
};

export const getResourceById = async (
    id: string
): Promise<ResourceDto | ErrorResponse> => {
    const result: Response = await fetch(`${apiUrl}/api/unknown/${id}`);
    const response: any = await result.json();

    let resource: ResourceDto | ErrorResponse = response.data;

    if (!result.ok) {
        resource = {
            code: result.status,
        };
    }

    return resource;
};

export const getResourceListByPage = async (): Promise<ResourceResponse> => {
    const result: Response = await fetch(`${apiUrl}/api/unknown`);
    const response = await result.json();

    const resourceList: ResourceResponse = response;

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

    return token;
};
