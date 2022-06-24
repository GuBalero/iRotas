import { keyframes, styled } from '@stitches/react';
import { css } from './StyleDefault';

export const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const StyledContent = css({
    minWidth: 200,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 5,
    boxShadow:
        '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        animationFillMode: 'forwards',
        willChange: 'transform, opacity',
        '&[data-state="open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade },
        },
    },
});

export const StyledLabel = css({
    paddingLeft: '$4',
    fontSize: 12,
    lineHeight: '25px',
    color: '$gray10',
});

export const StyledArrow = css({
    fill: 'white',
});

export const StyledItem = css({
    all: 'unset',
    fontSize: '$3',
    lineHeight: 1,
    color: '$gray11',
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    width: 'calc(100% - 30px)',
    padding: '0 5px',
    position: 'relative',
    paddingLeft: 25,
    userSelect: 'none',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '$gray9',
        color: '$gray1',
    },

    variants: {
        edit: {
            true: {
                '&:hover': {
                    backgroundColor: '$amber10',
                }
            },
        },
        remove: {
            true: {
                '&:hover': {
                    backgroundColor: '$tomato9',
                }
            }
        }
    }
});

export const RightSlot = styled('div', {
    marginLeft: 'auto',
    paddingLeft: 20,
    color: '$gray11',
    ':hover > &': { color: '$gray1' },
});