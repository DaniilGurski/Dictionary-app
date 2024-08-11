

export default function ErrorPage({ errorData }) {
  const {title, message, resolution} = errorData;

  return (
    <div className="error-page text-center grid">
        <span className="fs-heading-l"> 😕 </span>
        <h1 className="fw-bold"> {title} </h1>

        <p className="clr-neutral-400">
          {message} <br /> {resolution}
        </p>
    </div>
  )
}
