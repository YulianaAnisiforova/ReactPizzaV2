import React, {FC} from 'react'

type CategoriesPropsType = {
    categoryId: number,
    setCategoryId: (id: number) => void,
}

const Categories: FC<CategoriesPropsType> = (props) => {
    const categories: string[] = [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Микс',
    ]

    return (
        <div className="categories">
            <ul>
                {categories.map((cat, i) =>
                    <li key={i}
                        className={props.categoryId === i ? 'active' : ''}
                        onClick={() => props.setCategoryId(i)}
                    >{cat}</li>)}
            </ul>
        </div>
    )
}

export default Categories