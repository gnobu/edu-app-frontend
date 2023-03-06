import Header from "../../components/Header"
import IconText from "../../components/IconText"
import TestCard from "../../components/TestCard"
import { tests } from "../../utils/helpers"

export default function Drafts() {
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
        <div className="content bg-white draft-grid m-blk-5">
          {tests.filter(({ completed }) => !completed).map(test => {
            return <TestCard key={test.id} test={test} />
          })}
        </div>
      </section>
    </>
  )
}
