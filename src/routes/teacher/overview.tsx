import { useLoaderData } from "react-router-dom"
import CourseCard from "~/components/CourseCard"
import Header from "~/components/Header"
import IconText from "~/components/IconText"
import TestCard from "~/components/TestCard"
import { getCourses, getDrafts } from "~/utils/helpers"

export const loader = async () => {
  const drafts = await getDrafts()
  const courses = await getCourses()
  return { courses, drafts }
}

export default function Overview() {
  const { courses, drafts } = useLoaderData() as Awaited<ReturnType<typeof loader>>
  return (
    <>
      <Header>
        <>
          <h2 className="f-s-6 f-w-5">Welcome back, {'John'}</h2>
          <button>
            <IconText src="/src/assets/icons/add.svg#img" text="Create" />
          </button>
        </>
      </Header>

      <div className="container flex-col f-gap-1">
        <section>
          <h3 className="">Courses</h3>
          <div className="content bg-sec course-grid">
            {courses.map(course => {
              return <CourseCard key={course.id} course={course} />
            })}
          </div>
        </section>
        <section className="drafts">
          <h3 className="">Drafts</h3>
          <div className="content bg-sec draft-grid">
            {drafts.map(draft => {
              return <TestCard key={draft.id} test={draft} />
            })}
          </div>
        </section>
      </div>
    </>
  )
}