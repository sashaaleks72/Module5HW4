import { useEffect, useState } from "react";
import ErrorResponse from "../../dtos/ErrorResponse";
import ResourceDto from "../../dtos/ResourceDto";
import ResourceResponse from "../../dtos/ResourceResponse";
import { getResourceById, getResourceListByPage } from "../../http/fetches";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import ListComponent from "../ListComponent/ListComponent";
import classes from "../ResourceComponent/ResourceComponent.module.css";
import SelectComponent from "../SelectComponent/SelectComponent";
import SelectItemComponent from "../SelectComponent/SelectItemComponent";

const ResourceComponent = (): JSX.Element => {
    const [resourceList, setResourceListToState] = useState<ResourceResponse>();
    const [currentResource, setCurrentResource] = useState<
        ResourceDto | null | undefined
    >();
    const [selectedValue, setValue] = useState<string>("0");
    const [errorCode, setErrorCode] = useState<ErrorResponse>();

    useEffect(() => {
        const init = async () => {
            const resource = await getResourceById(selectedValue);
            if ((resource as ErrorResponse).code) {
                setCurrentResource(null);
                setErrorCode(resource as ErrorResponse);
            } else {
                setCurrentResource(resource as ResourceDto);
            }
        };
        init();
    }, [selectedValue]);

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
                <b>Resources: </b>

                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Resource ID</th>
                            <th>Name</th>
                            <th>Pantone value</th>
                            <th>Year</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>

                <SelectComponent
                    nameOfSelectedOption="Choose resource by ID"
                    setValue={setValue}
                >
                    {resourceList?.data.map((item, index) => (
                        <SelectItemComponent
                            key={index}
                            id={item.id}
                            title={item.id.toString()}
                        ></SelectItemComponent>
                    ))}
                </SelectComponent>

                {currentResource ? (
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Resource ID</th>
                                <th>Name</th>
                                <th>Pantone value</th>
                                <th>Year</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ListComponent
                                key={currentResource?.id}
                                id={currentResource?.id ?? 0}
                                name={
                                    currentResource?.name ??
                                    "default"
                                }
                                pantone_value={
                                    currentResource
                                        ?.pantone_value ?? "default"
                                }
                                year={
                                    currentResource?.year ??
                                    2022
                                }
                                color={
                                    currentResource?.color ??
                                    "default"
                                }
                            ></ListComponent>
                        </tbody>
                    </table>
                ) : <ErrorComponent code={errorCode?.code}></ErrorComponent> }
            </div>
        </div>
    );
};

export default ResourceComponent;
