export function StopIcon(props: {
    fill: string;
    width: number;
    height: number;
}) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 -960 960 960" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M240-240v-480h480v480H240Z" />
        </svg>
    )
}

StopIcon.defaultProps = {
    fill: '#A1A1AA',
    width: 24,
    height: 24,
};
