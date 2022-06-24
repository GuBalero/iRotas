import { gray } from "@radix-ui/colors";
import { keyframes, styled } from "@stitches/react";
import { css } from "./StyleDefault";

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const StyledOverlay = css({
    backgroundColor: '$blackA9',
    position: 'fixed',
    inset: 0,
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
});

export const StyledContent = css({
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '450px',
    maxHeight: '85vh',
    padding: 25,
    overflow: "hidden",
    overflowY: "auto",

    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
    '&:focus': { outline: 'none' },
});

export const StyledTitle = css({
    margin: 0,
    fontWeight: 700,
    color: '$gray12',
    fontSize: 20,
});

export const StyledDescription = css({
    margin: '10px 0 20px',
    color: '$gray11',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 1.5,
});

export const CloseButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 25,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$gray11',
    position: 'absolute',
    top: 10,
    right: 10,
    cursor: "pointer",

    '&:hover': { backgroundColor: '$gray4' },
    '&:focus': { boxShadow: `0 0 0 2px ${gray.gray7}` },
});

export const Fieldset = styled('fieldset', {
    all: 'unset',
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    marginBottom: 15,
});

export const Label = styled('label', {
    fontSize: 15,
    color: '$gray11',
    width: 90,
    textAlign: 'right',
});

export const Input = styled('input', {
    all: 'unset',
    width: '100%',
    flex: '1',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 10px',
    fontSize: 15,
    lineHeight: 1,
    color: '$gray11',
    border: `solid 1px ${'$gray7'}`,
    height: 35,

    '&:focus, &:not(:placeholder-shown)': { 
        border: `solid 1px ${'$mint11'}`
     },
});