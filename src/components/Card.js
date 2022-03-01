import './Card.css'

export default function Card({
    title,
    details,
    iconBackgroundColor,
    children,
}) {
    return (
        <>
            <div className="card">
                <div
                    className="icon-container"
                    style={{
                        backgroundColor: iconBackgroundColor,
                    }}
                >
                    {children}
                </div>
                <div className="text-container">
                    <div className="details"> {details} </div>
                    <div className="title"> {title} </div>
                </div>
            </div>
        </>
    )
}
