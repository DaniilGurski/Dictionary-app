

export default function FontChanger({ font }) {
    return (
        <div className="font-changer">
            <span className="fw-bold">
                {font}
            </span>

            <ul className="font-changer__fonts">
                <li> Font </li>
                <li> Font </li>
                <li> Font </li>
            </ul>
        </div>
    )
}
