import { useNavigate, useOutletContext } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { HeaderContext } from '~/routes/test'
import Options from './Options'
import Modal from './Modal'
import ButtonGroup from './ButtonGroup'
import IconText from './IconText'
import '~/styles/question.css'

export default function QuestionLayout() {
    const [finished, setFinished] = useState<boolean>(false)
    const [sendResult, setSendResult] = useState(false)

    const { takeChildren } = useOutletContext<HeaderContext>()
    useEffect(() => {
        const headerContent = <>
            <IconText src={'/src/assets/icons/timer.svg#img'} srcCls='desktop f-s-6'
                element={<span className='timer f-s-5 f-w-6'>00:10:34</span>} />
            <ButtonGroup>
                <>
                    <button className='nav-button'>
                        <IconText src='/src/assets/icons/left.svg#img' srcCls='f-s-2' element={<span className='desktop'>Previous</span>} />
                    </button>
                    <button className='nav-button'>
                        <IconText src='/src/assets/icons/right.svg#img' srcCls='f-s-2' element={<span className='desktop'>Next</span>} classNames='f-rev' />
                    </button>
                </>
            </ButtonGroup>
        </>
        takeChildren(headerContent)
        return () => {
            takeChildren(null)
        }
    }, [])

    const navigate = useNavigate()
    function hanldeFinished() {
        setFinished(false)
        navigate('/test')
    }

    return (
        <div className={`question-layout container flex f-al-start scroll-y`}>
            <div className={`question sticky-top`}>
                <h2>Machine Design II (MEE 415)</h2>
                <p>Question 1 of 30</p>
                <div className="content bg-sec centered-text">
                    <p className='f-s-6'>A clock strikes once at 1 o'clock, twice at 2 o'clock, thrice at 3 o'clock and so on. How many times will it strike in 24 hours?</p>
                </div>
                <button onClick={() => { setFinished(true) }} className='big m-blk-6 f-s-5 f-w-6'>Submit</button>
            </div>
            <Options />
            <Modal isVisible={finished} setVisible={setFinished} onClose={hanldeFinished} >
                <div className='flex-col centered-flex'>
                    <p className='centered-text col-tert f-s-5 f-w-6'>Your Result</p>
                    <div className={`ring centered-grid centered-text`}>
                        <p>
                            <span className="blk f-s-9 f-w-7">26</span>
                            {' '}
                            <span className="col-tert f-s-5 f-w-6">of 30</span>
                        </p>
                    </div>
                    <p className='centered-text col-tert'>
                        <span className='blk m-blk-2 f-s-5 f-w-6'>Congratulations</span>
                        <span className='f-w-5'>You scored higher than 50%</span>
                    </p>
                    {sendResult ?
                        <div className="form-group-inline email-field">
                            <input className="col-white ghost f-s-3" type="email" name="email" placeholder="Enter email address" />
                            <button className='small bg-sec col-accent' type="submit">Send</button>
                        </div>
                        : <button
                            onClick={() => { setSendResult(true) }}
                            className='big bg-sec col-accent f-s-5'>
                            Get result
                        </button>
                    }
                </div>
            </Modal>
        </div>
    )
}
