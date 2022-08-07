import UserDto from "./UserDto";

interface UserResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UserDto[];
}

export default UserResponse;
