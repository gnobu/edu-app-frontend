import QuestionLayout from "~/components/QuestionLayout"
import "~/styles/question.css"

export default function TestPage() {
    let content =
        <div className="content bg-sec medium">
            <form action="" className="flex-col centered-flex f-gap-1">
                <div className="intro centered-text">
                    <h2>You are about to take {`MEE 415`} test.</h2>
                    <p className='col-warn'>This is a timed test.</p>
                </div>
                <div className="form-group">
                    <input type="text" className="form-element centered-text" placeholder="Enter your registration number" required />
                </div>
                <div className="form-group">
                    <input className="form-element bg-accent w-100" type="submit" value={'Submit'} />
                </div>
            </form>
        </div>

    content = <div className="content bg-sec medium">
        <h2 className="centered-text">The test will begin shortly</h2>
        <ul className="m-blk-0">
            <span className={`f-s-5 f-w-5 col-warn centered-text m-bl-0`}>INSTRUCTIONS</span>
            <li>There are {`15`} questions in this test.</li>
            <li>The duration of this test is {`30 minutes`}.</li>
            <li>Each question is worth equal marks.</li>
        </ul>
    </div>

    content = <QuestionLayout />

    return content
}
