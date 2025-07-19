export const headerVariants = {
    sidebarVariants: {
        open: { width: '17rem' },
        closed: { width: '2.75rem' }
    },
    miniButtonTextVariant: {
        initial: { x: '-100px' },
        exit: { x: '-100px' },
        enter: (index: number) => ({
            x: 0,
            transition: {
                duration: 0.2,
                delay: index * 0.02
            }
        })
    },
    horizontalMarginVariants: {
        open: {
            marginLeft: '2rem',
            marginRight: '2rem'
        },
        closed: {
            marginLeft: '0.5rem',
            marginRight: '0.5rem'
        }
    },
    closeTextVariants: {
        open: (index: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: -index * 0.02
            }
        }),
        closed: {
            x: '-110px',
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    },
    rightMarginVariants: {
        open: {
            marginLeft: '3rem',
        },
        closed: {
            marginLeft: '0.5rem',
        },
    },
    navLinkTextVariant: {
        open: {
            opacity: 1,
            scaleX: 1,
            width: 'auto',
            margin: 0,
            marginLeft: '0.5rem',
            transition: {
                duration: 0.1,
            },
            ease: "easeOut",
        },
        closed: {
            opacity: 0,
            scaleX: 0,
            width: 0,
            margin: 0,
            marginLeft: 0,
            transition: {
                duration: 0.2,
            },
            ease: "easeIn",
        },
    },
    navLinkVariant: {
        open: {
            borderBottomLeftRadius: "3rem",
            borderTopLeftRadius: "3rem",
        },
        closed: {
            borderBottomLeftRadius: "1rem",
            borderTopLeftRadius: "1rem",
        }
    }
}

export const mountAnim = { initial: "initial", animate: "enter", exit: "exit" };