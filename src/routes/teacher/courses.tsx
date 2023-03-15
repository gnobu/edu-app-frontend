import { useLoaderData } from "react-router-dom"
import CourseCard from "~/components/CourseCard"
import Header from "~/components/Header"
import IconText from "~/components/IconText"
import { getCourses } from "~/utils/helpers"
import { AwaitedReturn } from "~/utils/types"

export async function loader() {
  const courses = await getCourses()
  return { courses }
}

export default function Courses() {
  const { courses } = useLoaderData() as AwaitedReturn<typeof loader>
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
        <div className="course-grid m-blk-5">
          {courses.map(course => {
            return <CourseCard key={course.id} course={course} />
          })}
        </div>
      </section>
    </>
  )
}
