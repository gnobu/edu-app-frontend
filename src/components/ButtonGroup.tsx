export default function ButtonGroup({ children }: { children: JSX.Element }) {
    return (
        <nav className='f-gap-1'>
            {children}
        </nav>
    )
}
