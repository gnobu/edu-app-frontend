type PropType = { children?: React.ReactNode, classNames?: string }

export default function Header({ children, classNames }: PropType) {
    return (
        <header className={`${classNames}`}>
            <div className="container flex flex-btwn aligned-flex">
                {children}
            </div>
        </header>
    )
}
