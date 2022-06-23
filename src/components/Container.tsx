import { useState } from "react"
import { css } from "../styles/StyleDefault"

interface PropsType {
    height: string,
    width: string,
    children: React.ReactNode
}

function Container(props:PropsType){
    
    const container = css({
        width: props.width,
        height: props.height,
        backdropFilter: 'blur(0) saturate(200%)',
        borderRadius: "$1",
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        marginLeft: '$4',
        marginRight: '$4',
        display: 'flex',
        flexDirection: 'column',
        padding: '$3'
    })

    return (
        <div className={container()}>
            {props.children}
        </div>
    )
}

export default Container