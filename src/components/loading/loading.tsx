export function Loading(props: {
    size: string;
    className: string;
}) {
    return (
        <>
            <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#b69548" strokeWidth="3" r="23" strokeDasharray="108.38494654884786 38.12831551628262">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        </>
    )
}

Loading.defaultProps = {
    size: '50px',
    className: ''
};
