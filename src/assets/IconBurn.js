export default function IconBurn({
    color = '#FF0101',
    onClickFunction = undefined,
}) {
    return (
        <svg
            onClick={onClickFunction}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                opacity="0.066125"
                width="60"
                height="60"
                rx="6"
                fill={color}
            />
        </svg>
    )
}
