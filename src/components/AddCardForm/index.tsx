import { useState } from "react";
import { Cards, categories } from "../../types/categories"
import { v4 as uuidv4 } from 'uuid';


type Props = {
    selectedCategory: categories;
    listItems: Cards[];
    setListItems: (cards: Cards[]) => void;
    setOpenCardForm: (value: boolean) => void
}

export const AddCardForm = ({ selectedCategory, listItems, setListItems, setOpenCardForm }: Props) => {
    const nid = uuidv4();
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => (
        setInputValue(e.target.value)
    )
    const handleClick = () => {
        setListItems([
            ...listItems, {
                id: nid,
                content: inputValue,
                category: selectedCategory
            }
        ]);
        console.log(listItems)
        setOpenCardForm(false)
        setInputValue('')
    }
    return (
        <div className="form-wrapper">
            <div className="form">
                Add Card to {selectedCategory}
                <input value={inputValue} onChange={(e) => { handleChange(e) }} />
                <button disabled={inputValue == ''} onClick={handleClick}>Add</button>
            </div>
        </div>
    )
}