import { useEffect, useState } from "react";
import ResourceResponse from "../../dtos/ResourceResponse";
import { getResourceListByPage } from "../../http/fetches";
import ListComponent from "../ListComponent/ListComponent";
import classes from "../ResourceComponent/ResourceComponent.module.css";

const ResourceComponent = () => {
    const [resourceList, setResourceListToState] = useState<ResourceResponse>();

    useEffect(() => {
        const init = async () => {
            const resourceList: ResourceResponse =
                await getResourceListByPage();
            setResourceListToState(resourceList);
        };

        init();
    }, []);

    return (
        <div className={classes.resourceBlock}>
            <div>
                <b>Page:</b> {resourceList?.page}
            </div>
            <div>
                <b>Per page:</b> {resourceList?.per_page}
            </div>
            <div>
                <b>Total:</b> {resourceList?.total}
            </div>
            <div>
                <b>Total pages:</b> {resourceList?.total_pages}
            </div>
            <div>
                <b>Users: </b>
                {resourceList?.data.map((resource, index) => {
                    return (
                        <ListComponent
                            key={index}
                            id={resource.id}
                            name={resource.name}
                            pantone_value={resource.pantone_value}
                            year={resource.year}
                            color={resource.color}
                        ></ListComponent>
                    );
                })}
            </div>
        </div>
    );
};

export default ResourceComponent;
