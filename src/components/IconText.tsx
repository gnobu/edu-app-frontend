type IconTextProps = {
    src: string, srcCls?: string, text?: string, classNames?: string, element?: React.ReactNode, size?: "small" | "xs"
}
export default function IconText({ src, srcCls, text, element, size, classNames }: IconTextProps) {
    return (
        <div className={`f-gap-p5 aligned-flex ${size === 'xs' ? 'f-s-3' : 'f-s-4'} ${classNames ?? ''}`} >
            <svg className={srcCls} height={'1.5em'} >
                <use href={src} width={'100%'} height={'100%'} />
            </svg>
            {text
                ? <span>{text}</span>
                : element}
        </div>
    )
}
