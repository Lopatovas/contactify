export interface IFilterableFields{
    Name: boolean;
    City: boolean;
    Email: boolean;
    Phone: boolean;
}

export interface IFilterPopupProps {
    activeFields: IFilterableFields;
    onValueChange: (fields: IFilterableFields) => void;
}
