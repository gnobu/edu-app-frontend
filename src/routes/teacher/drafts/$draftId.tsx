import { Form, LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import Header from "../../../components/Header"
import { getTest } from "../../../utils/helpers"
import "/src/styles/draft.css"

export async function loader({ params }: LoaderFunctionArgs) {
    const draft = await getTest(params.draftId)
    if (!draft) throw new Response("Draft Not found.", {
        status: 404,
    })
    return { draft }
}

export default function Draft() {
    const { draft } = useLoaderData() as Awaited<ReturnType<typeof loader>>
    console.log(draft)
    return (
        <Form>
            <Header>
                <div className="w-100 flex f-end f-gap-2">
                    <button className="outline">Exit</button>
                    <button>Save</button>
                </div>
            </Header>
            <div className="flex f-gap-1 bg-sec m-blk-4">
                <aside className="content quest_col">Questions</aside>
                <div className="content bg-tert f-grow">edit</div>
                <aside className="content opt_col">options</aside>
            </div>
        </Form>
    )
}
