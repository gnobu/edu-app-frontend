import { useRef } from "react"
import { Form, LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import Header from "~/components/Header"
import IconText from "~/components/IconText"
import QuestBox from "~/components/QuestBox"
import { getTest } from "~/utils/helpers"
import "~/styles/draft.css"

export async function loader({ params }: LoaderFunctionArgs) {
    const draft = await getTest(params.draftId)
    if (!draft) throw new Response("Draft Not found.", {
        status: 404,
    })
    return { draft }
}

export default function Draft() {
    const { draft } = useLoaderData() as Awaited<ReturnType<typeof loader>>

    const optbar = useRef<HTMLElement>(null)
    function toggleOptbar(e:React.MouseEvent){
        e.preventDefault()
        optbar.current?.toggleAttribute('aria-collapsed')
    }
    return (
        <Form className="flex-col f-gap-1">
            <Header>
                <div className="w-100 flex f-end f-gap-2">
                    <button className="outline">Exit</button>
                    <button>Save</button>
                </div>
            </Header>
            <div className="f-gap-1 f-grow">
                <section className="quest_col bg-sec flex-col f-al-center">
                    <div className="quest_boxes scroll-y m-blk-4">
                        {[0, 1, 2, 3, 4].map(idx =>
                            <QuestBox key={idx} idx={idx + 1} />
                        )}
                    </div>
                    <button title="new question" className="outline small col-tert">
                        <IconText src="/src/assets/icons/add.svg#img"/>
                    </button>
                    <button title="Delete question" className="outline m-blk-4 col-warn">Delete</button>
                </section>

                <div className="content f-grow">edit</div>

                <section ref={optbar} className="opt_col pos-rel bg-sec">
                    <button onClick={toggleOptbar} className="toggler bg-sec col-tert">
                        <IconText src={"/src/assets/icons/right.svg#img"} size={"xs"} />
                    </button>
                    <aside className="content">
                        <div className="form-group m-blk-4">
                            <label htmlFor="course">Course</label>
                            <select className="form-element" name="course">
                                <option defaultValue={''}>Select a course</option>
                                <option value={draft.course.courseTitle}>{draft.course.courseTitle}</option>
                            </select>
                        </div>
                        <div className="form-group m-blk-4">
                            <label htmlFor="time">Time limit</label>
                            <select className="form-element" name="time">
                                <option defaultValue={5}>5 minutes</option>
                            </select>
                        </div>

                        <hr className="m-blk-5" />

                        <p className="f-s-3 m-blk-5">QUESTION SPECIFIC</p>
                        <div className="form-group m-blk-4">
                            <label htmlFor="ansType">Answer Type</label>
                            <select className="form-element" name="ansType">
                                <option defaultValue={''}>Pick a type</option>
                                <option value={'single'}>Single select</option>
                                <option value={'multi'}>Multiple select</option>
                            </select>
                        </div>
                        <div className="form-group m-blk-4">
                            <label htmlFor="generate">Generate answer</label>
                            <select className="form-element" name="generate">
                                <option defaultValue={''}>Pick a type</option>
                                <option value={'systematic'}>Systematically</option>
                                <option value={'randomise'}>Randomise</option>
                            </select>
                        </div>
                    </aside>
                </section>
            </div>
        </Form>
    )
}
