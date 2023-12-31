export function FacebookIcon(
    props: {
        width: number;
        height: number;
        fill: string;
    }
) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 512 512" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64  H288z" />
        </svg>
    )
}

FacebookIcon.defaultProps = {
    width: 24,
    height: 24,
    fill: '#fff'
};
