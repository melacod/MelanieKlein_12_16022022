export default function IconLipid({
    color = '#FF0101',
    onClickFunction = undefined,
}) {
    return (
        <svg
            onClick={onClickFunction}
            width="18"
            height="8"
            viewBox="0 0 18 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.25 0H7.75C3.625 0 0.25 3.375 0.25 7.5H17.75C17.75 3.375 14.375 0 10.25 0ZM6.5 5C5.75 5 5.25 4.5 5.25 3.75C5.25 3 5.75 2.5 6.5 2.5C7.25 2.5 7.75 3 7.75 3.75C7.75 4.5 7.25 5 6.5 5ZM11.5 5C11.5 5.75 12 6.25 12.75 6.25C13.5 6.25 14 5.75 14 5C14 4.25 13.5 3.75 12.75 3.75C12 3.75 11.5 4.25 11.5 5Z"
                fill={color}
            />
        </svg>
    )
}
