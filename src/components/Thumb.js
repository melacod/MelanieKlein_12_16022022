import './Thumb.css'

export default function Thumb({
    title,
    details,
    iconBackgroundColor,
    children,
}) {
    return (
        <>
            <div className="thumb">
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
