import { useRouteError } from "react-router"
const Error = () => {
    const err=useRouteError();
  return (
    <div>
        <h1>error found</h1>
        <h2>{err.status}</h2>

    </div>

  )
}

export default Error