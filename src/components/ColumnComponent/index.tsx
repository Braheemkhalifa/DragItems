import { Cards, categories } from "../../types/categories";
import { CardItem } from "../CardItem";
import { Empty } from "../Empty";


type Props = {
    cards: Cards[];
    category: categories;
    isDragging: boolean
    handleDragging: (dragging: boolean) => void;
    handleUpdateList: (id: string, category: categories) => void;
    handleAddCard: (category: categories) => void;

}
export const ColumnComponent = ({ cards, category, isDragging, handleDragging, handleUpdateList, handleAddCard }: Props) => {
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const id = e.dataTransfer.getData('text')
        handleUpdateList(id, category)
        handleDragging(false)
    }

    const ColumnData = cards.filter(singleCard => singleCard && singleCard.category === category)

    return (
        <section className={`columnComponent ${isDragging ? 'layout-dragging' : ''}`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}

        >
            <div className="title">
                <h3>
                    {category}
                </h3>
                <span className="add" onClick={() => handleAddCard(category)}>
                    +
                </span>
            </div>
            <div className="body">

                {ColumnData.length > 0 ?
                    <>
                        {ColumnData.map(singleCard => (

                            <CardItem key={singleCard.content} card={singleCard} handleDragging={handleDragging} />
                        )
                        )}

                    </> :
                    <Empty />

                }
            </div>
        </section>

    );
};


