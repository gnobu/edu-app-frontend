import { Link } from 'react-router-dom'

export default function TestForm() {
    return (
        <div className="container flex centered-flex">
            <div className="content bg-sec medium">
                <form action="" className="flex-col centered-flex f-gap-1">
                    <h2>Enter the test code</h2>
                    <div className="form-group">
                        <div className="form-group-inline">
                            <input type="number" className="code_input form-element centered-text" maxLength={1} min={0} max={9} required />
                            <input type="number" className="code_input form-element centered-text" maxLength={1} min={0} max={9} required />
                            <input type="number" className="code_input form-element centered-text" maxLength={1} min={0} max={9} required />
                            <input type="number" className="code_input form-element centered-text" maxLength={1} min={0} max={9} required />
                            <input type="number" className="code_input form-element centered-text" maxLength={1} min={0} max={9} required />
                            <input type="number" className="code_input form-element centered-text" maxLength={1} min={0} max={9} required />
                        </div>
                    </div>
                    <div className="form-group">
                        {/* <input className="form-element" type="submit" value={'Continue'} /> */}
                        <Link to={'testId'} className='button'>Continue</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
