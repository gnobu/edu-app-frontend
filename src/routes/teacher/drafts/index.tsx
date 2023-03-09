import { useLoaderData } from "react-router-dom"
import Header from "~/components/Header"
import IconText from "~/components/IconText"
import TestCard from "~/components/TestCard"
import { getDrafts } from "~/utils/helpers"

export const loader = async () => {
  const drafts = await getDrafts()
  return { drafts }
}

export default function Drafts() {
  const { drafts } = useLoaderData() as Awaited<ReturnType<typeof loader>>
  return (
    <>
      <Header>
        <div className="w-100 flex f-end">
          <button>
            <IconText src="/src/assets/icons/add.svg#img" text="Create" />
          </button>
        </div>
      </Header>
      <section className="container">
        <div className="content bg-sec draft-grid m-blk-5">
          {drafts.map(draft => {
              return <TestCard key={draft.id} test={draft} />
            })}
        </div>
      </section>
    </>
  )
}
