import { Link } from "react-router-dom"
import QuestionLayout from "../../components/QuestionLayout"
import "../../styles/question.css"

export default function TestPage() {
    let content =
        <div className="content bg-white medium">
            <form action="">
                <div className="intro centered-text">
                    <h2>You are about to take {`MEE 415`} test.</h2>
                    <p className={`instruction`}>This is a timed test.</p>
                </div>
                <div className="form-group">
                    <input type="text" className="form-element centered-text" placeholder="Enter your registration number" required />
                </div>
                <div className="form-group">
                    {/* <input className="form-element" type="submit" value={'Submit'} /> */}
                    <Link to={'testId'} className='button'>Submit</Link>
                </div>
            </form>
        </div>

    content = <div className="content bg-white medium">
        <h2 className="centered-text">The test will begin shortly</h2>
        <ul className="m-blk-0">
            <span className={`instruction centered-text m-bl-0`}>Instructions</span>
            <li>There are {`15`} questions in this test.</li>
            <li>The duration of this test is {`30 minutes`}.</li>
            <li>Each question is worth equal marks.</li>
        </ul>
    </div>

    content = <QuestionLayout />

    return content
}
