import React, {FC} from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: FC = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="134" cy="136" r="120" />
        <rect x="0" y="270" rx="10" ry="10" width="280" height="23" />
        <rect x="0" y="315" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="420" rx="10" ry="10" width="110" height="30" />
        <rect x="125" y="415" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton