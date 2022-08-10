type Props = {
    nameOfSelectedOption: string;
    children?: JSX.Element[];
    setValue: Function;
};

const SelectComponent = (props: Props): JSX.Element => {
    return (
        <select
            className="form-select mb-3"
            aria-label="Default select example"
            onChange={(e) => {
                props.setValue(e.target.value);
            }}
        >
            {props.children ? (
                <>
                    <option>{props.nameOfSelectedOption}</option>
                    {props.children}
                </>
            ) : (
                <option>Select is empty</option>
            )}
        </select>
    );
};

export default SelectComponent;
