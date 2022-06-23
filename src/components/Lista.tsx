import { css } from "../styles/StyleDefault"

function Lista(props: any) {

    const lista = css({
        marginTop: '$3',
        overflowY: "scroll",
        overflowX: "hidden",
        '&::-webkit-scrollbar': {
            width: '9px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '$mint8',
            borderRadius: '$2',
        },
    })

    return (
        <ul className={lista()}>
            {props.children}
        </ul>
    )
}

export default Lista