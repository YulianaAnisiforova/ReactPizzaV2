import React, {FC, useState} from 'react'

const Categories: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const categories: string[] = [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    return (
        <div className="categories">
            <ul>
                {categories.map((cat, i) =>
                    <li key={i}
                        className={activeIndex === i ? 'active' : ''}
                        onClick={() => setActiveIndex(i)}
                    >{cat}</li>)}
            </ul>
        </div>
    )
}

export default Categories