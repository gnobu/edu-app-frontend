import { useRouteError } from "react-router-dom"
import { ErrorResponse } from "../utils/types"

export default function ErrorPage({ title, description }: { title?: string, description?: string }) {
  const error = useRouteError() as ErrorResponse
  console.error(error)

  return (
    <div className="error-page flex-col centered-flex">
      <h1>{title || 'OOPS!'}</h1>
      <p>{description || 'Something unexpected happened.'}</p>
      <p><i>{error.statusText || error.status}</i></p>
    </div>
  )
}
