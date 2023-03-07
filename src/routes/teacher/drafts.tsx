import { useLoaderData } from "react-router-dom"
import Header from "../../components/Header"
import IconText from "../../components/IconText"
import TestCard from "../../components/TestCard"
import { getTests } from "../../utils/helpers"

export const loader = async () => {
  const tests = await getTests()
  return { tests }
}

export default function Drafts() {
  const { tests } = useLoaderData() as Awaited<ReturnType<typeof loader>>
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
          {tests.length
            ? tests.filter(({ completed }) => !completed).map(test => {
              return <TestCard key={test.id} test={test} />
            })
            : null}
        </div>
      </section>
    </>
  )
}
