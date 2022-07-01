import { MouseEventHandler } from "react"
import { css } from "../styles/StyleDefault"

type PropsType = {
    children: React.ReactNode,
    onClick?: MouseEventHandler,
    habilitado?: boolean
}

export const StyledButton = css({
    cursor: 'pointer',
    border: 'none',
    borderRadius: '$1',
    transition: 'all ease 0.2s',
    fontSize: '$5',
    width: '100%',
    padding: '$1',
    marginTop: '$5',

    variants: {
        color: {
            blue: {
                color: '$indigo4',
                backgroundColor: '$indigo9',
                '&:hover': {
                    backgroundColor: '$indigo10'
                },
            },
            red: {
                color: '$tomato4',
                backgroundColor: '$tomato9',
                '&:hover': {
                    backgroundColor: '$tomato10'
                },
            },
            yellow: {
                color: '$amber12',
                backgroundColor: '$amber9',
                '&:hover': {
                    backgroundColor: '$amber10'
                },
            }
        },
        font: {
            light: { fontWeight: '$1', },
            medium: { fontWeight: '$2', },
            bold: { fontWeight: '$3', },
        },
        habilitado: {
            false: {
                pointerEvents: 'none',
                color: '$gray11',
                backgroundColor: '$gray8'
            }
        }
    },

    compoundVariants: [{
        color: "yellow",
        habilitado: false,
        css: {
            pointerEvents: 'none',
            color: '$gray11',
            backgroundColor: '$gray8'
        }
    }],

    defaultVariants: {
        color: 'blue',
        font: 'bold'
    }
})

function Button(props: PropsType) {
    return (
        <button className={StyledButton({ habilitado: props.habilitado })} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button