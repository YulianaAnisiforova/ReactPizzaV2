import React, {FC, useState} from 'react'

const Categories: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    type CategoryType = { id: number, name: string }

    const categories: CategoryType[] = [
        {id: 0, name: 'Все'},
        {id: 1, name: 'Мясные'},
        {id: 2, name: 'Вегетарианские'},
        {id: 3, name: 'Гриль'},
        {id: 4, name: 'Острые'},
        {id: 5, name: 'Закрытые'},
    ]

    return (
        <div className="categories">
            <ul>
                {categories.map(cat =>
                    <li key={cat.id}
                        className={activeIndex === cat.id ? 'active' : ''}
                        onClick={() => setActiveIndex(cat.id)}
                    >{cat.name}</li>)}
            </ul>
        </div>
    )
}

export default Categories