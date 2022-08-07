import ResourceDto from "./ResourceDto";

interface ResourceResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: ResourceDto[];
}

export default ResourceResponse;
