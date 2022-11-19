import { useState } from "react";
import { Cards, categories } from "../../types/categories";
import { AddCardForm } from "../AddCardForm";
import { ColumnComponent } from "../ColumnComponent";

export const cardsList: Cards[] = [
    {
        id: '1',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industr',
        category: 'category 1'
    },
    {
        id: '2',
        content: 'category 2  Ipsum is simply dummy text of the printing and typesetting industr',
        category: 'category 2'
    }, {
        id: '3',
        content: 'category 3  Ipsum is simply dummy text of the printing and typesetting industr',
        category: 'category 3'
    }, {
        id: '4',
        content: 'category 4 Ipsum is simply dummy text of the printing and typesetting industr',
        category: 'category 4'
    },
    {
        id: '5',
        content: 'category 5 Ipsum is simply dummy text of the printing and typesetting industr',
        category: 'category 3'
    }, {
        id: '6',
        content: 'category 21 Ipsum is simply dummy text of the printing and typesetting industr',
        category: 'category 2'
    },

]


export const HomeComponent = () => {

    const [isDragging, setIsDragging] = useState(false)
    const handleDragging = (dragging: boolean) => setIsDragging(dragging)
    const [listItems, setListItems] = useState<Cards[]>(cardsList)
    const [openCardForm, setOpenCardForm] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<categories>('category 1')

    const handleUpdateList = (id: string, category: categories) => {
        let card = listItems.find(item => item && item.id === id)
        if (card && card.category !== category) {
            card.category = category

            setListItems(prev => (
                [
                    card!,
                    ...prev.filter(item => item && item.id !== id)
                ]))
        }
        console.log(listItems)
    }


    const handleAddCard = (category: categories) => {
        setOpenCardForm(true);
        setSelectedCategory(category)

    }
    return (

        <div>
            {openCardForm ? <div>
                <AddCardForm selectedCategory={selectedCategory} listItems={listItems} setListItems={setListItems} setOpenCardForm={setOpenCardForm} />
            </div> :


                <section className="wrapper">




                    <div className="row">
                        <div className=" col col-12">
                            <ColumnComponent
                                isDragging={isDragging}
                                handleDragging={handleDragging}
                                cards={listItems}

                                category="category 1"
                                handleUpdateList={handleUpdateList}
                                handleAddCard={handleAddCard}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col col-4">
                            <ColumnComponent isDragging={isDragging}
                                handleDragging={handleDragging}
                                cards={listItems}
                                category="category 2"
                                handleUpdateList={handleUpdateList}
                                handleAddCard={handleAddCard} />

                        </div>
                        <div className=" col col-8">

                            <div className="row">
                                <div className=" col col-4">
                                    <ColumnComponent
                                        isDragging={isDragging}
                                        handleDragging={handleDragging}
                                        cards={listItems}
                                        category="category 3"
                                        handleUpdateList={handleUpdateList}
                                        handleAddCard={handleAddCard}

                                    />

                                </div>
                                <div className=" col col-4">
                                    <ColumnComponent
                                        isDragging={isDragging}
                                        handleDragging={handleDragging}
                                        cards={listItems}
                                        category="category 4"
                                        handleUpdateList={handleUpdateList}
                                        handleAddCard={handleAddCard}
                                    />

                                </div>
                                <div className=" col col-4">
                                    <ColumnComponent
                                        isDragging={isDragging}
                                        handleDragging={handleDragging}
                                        cards={listItems}
                                        category="category 5"
                                        handleUpdateList={handleUpdateList}
                                        handleAddCard={handleAddCard}
                                    />

                                </div>
                            </div>

                        </div>
                    </div>



                </section>}

        </div>

    );
};


