export function RemoveIcon(props: {
    fill: string;
    width: number;
    height: number;
}) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 20 20" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M4.7915 10.625C4.61095 10.625 4.46164 10.566 4.34359 10.4479C4.22553 10.3299 4.1665 10.1806 4.1665 10C4.1665 9.81944 4.22553 9.67014 4.34359 9.55208C4.46164 9.43403 4.61095 9.375 4.7915 9.375H15.2082C15.3887 9.375 15.538 9.43403 15.6561 9.55208C15.7741 9.67014 15.8332 9.81944 15.8332 10C15.8332 10.1806 15.7741 10.3299 15.6561 10.4479C15.538 10.566 15.3887 10.625 15.2082 10.625H4.7915Z" />
        </svg>
    )
}

RemoveIcon.defaultProps = {
    fill: '#A1A1AA',
    width: 24,
    height: 24,
};
