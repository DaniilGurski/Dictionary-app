

export default function NoDefinitionsFound({ errorData }) {
  const {title, message, resolution} = errorData;

  return (
    <div className="error-page text-center grid">
        😕
        <h1 className="fw-bold"> {title} </h1>

        <p className="clr-neutral-400">
          {message} <br /> {resolution}
        </p>
    </div>
  )
}
