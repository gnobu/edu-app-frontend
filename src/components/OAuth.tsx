import googleSVG from "../assets/icons/google-svg.svg"
import mcsSVG from "../assets/icons/microsoft-svg.svg"

export default function OAuth() {
    return (
        <>
            <div className="form-divisor centered-text"><span>OR</span></div>

            <div className="form-group">
                <button className="outline form-element">
                    <span className='flex f-gap-p5 f-al-center col-black'>
                        <img src={googleSVG} width={18} height={18} />
                        Continue with Google
                    </span>
                </button>
            </div>
            <div className="form-group">
                <button className="outline form-element">
                    <span className={`flex f-gap-p5 f-al-center col-black`}>
                        <img src={mcsSVG} width={18} height={18} />
                        Continue with Microsoft
                    </span>
                </button>
            </div>
        </>
    )
}
