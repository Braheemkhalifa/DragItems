import { Cards } from "../../types/categories"


interface Props {
    card: Cards;
    handleDragging: (dragging: boolean) => void

}

export const CardItem = ({ card, handleDragging }: Props) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', `${card.id}`)
        handleDragging(true)
    }


    const handleDragEnd = () => handleDragging(false)

    return (
        <div className='card-wrapper'
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <p>{card.content}</p>
        </div>
    )
}