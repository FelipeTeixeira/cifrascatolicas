export function HomeIcon(props: {
    fill: string;
    width: number;
    height: number;
}) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 25 24" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M6 19.5H9.75V13.25H15.25V19.5H19V9.75L12.5 4.875L6 9.75V19.5ZM6 21C5.58333 21 5.22917 20.8542 4.9375 20.5625C4.64583 20.2708 4.5 19.9167 4.5 19.5V9.75C4.5 9.51667 4.55417 9.29167 4.6625 9.075C4.77083 8.85833 4.91667 8.68333 5.1 8.55L11.6 3.675C11.7333 3.575 11.875 3.5 12.025 3.45C12.175 3.4 12.3333 3.375 12.5 3.375C12.6667 3.375 12.825 3.4 12.975 3.45C13.125 3.5 13.2667 3.575 13.4 3.675L19.9 8.55C20.0833 8.68333 20.2292 8.85833 20.3375 9.075C20.4458 9.29167 20.5 9.51667 20.5 9.75V19.5C20.5 19.9167 20.3542 20.2708 20.0625 20.5625C19.7708 20.8542 19.4167 21 19 21H13.75V14.75H11.25V21H6Z" />
        </svg>
    )
}

HomeIcon.defaultProps = {
    fill: '#A1A1AA',
    width: 25,
    height: 24,
};
