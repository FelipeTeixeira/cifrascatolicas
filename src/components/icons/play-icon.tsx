export function PlayIcon(props: {
    fill: string;
    width: number;
    height: number;
}) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 16 16" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M6.10016 12.1333C5.9335 12.2445 5.76405 12.25 5.59183 12.15C5.41961 12.05 5.3335 11.9 5.3335 11.7V4.20001C5.3335 4.00001 5.41961 3.85001 5.59183 3.75001C5.76405 3.65001 5.9335 3.65556 6.10016 3.76667L12.0002 7.53334C12.1557 7.63334 12.2335 7.77223 12.2335 7.95001C12.2335 8.12779 12.1557 8.26667 12.0002 8.36667L6.10016 12.1333ZM6.3335 10.8L10.8168 7.95001L6.3335 5.10001V10.8Z" />
            <path d="M6.3335 10.8L10.8168 7.95001L6.3335 5.10001V10.8Z" />
        </svg>
    )
}

PlayIcon.defaultProps = {
    fill: '#A1A1AA',
    width: 24,
    height: 24,
};
