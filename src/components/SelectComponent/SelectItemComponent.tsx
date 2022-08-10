type Props = {
    id: number;
    title: string;
};

const SelectItemComponent = (props: Props): JSX.Element => {
    return <option value={props.id}>{props.title}</option>;
};

export default SelectItemComponent;
