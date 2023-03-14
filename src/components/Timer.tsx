import IconText from './IconText'

export default function Timer({ timer }: { timer: string }) {
    return (
        <IconText src={'/src/assets/icons/timer.svg#img'} srcCls='desktop f-s-6'
            element={<span className='timer f-s-5 f-w-6'>{timer}</span>} />
    )
}
