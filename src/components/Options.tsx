import '../styles/question.css'

export default function Options() {
    function handleselect(e: React.MouseEvent) {
        const targ = e.target as HTMLElement
        targ.toggleAttribute('aria-selected')
    }
    // 78, 134, 456, 3883.2323,
    const optionList = [234, 48, 87, 2983].map((option, idx) => (
        <div key={idx} className='option flex bg-tert'
            onClick={handleselect}>
            <div className='bg-accent label f-s-7 f-w-9 stroke-text'>{String.fromCharCode(65 + idx)}</div>
            <div className={`value f-s-7`}>{option}</div>
        </div>))

    return (
        <div className={`content bg-sec small options`}>
            <p className={`instruction instruction centered-text`}>Single select</p>
            <form action="" className='centered-text'>
                {optionList}
            </form>
        </div>
    )
}
