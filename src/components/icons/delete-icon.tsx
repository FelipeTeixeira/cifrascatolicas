export function DeleteIcon(props: {
    fill: string;
    width: number;
    height: number;
}) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 16 17" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M4.34984 14.5C4.08317 14.5 3.84984 14.4 3.64984 14.2C3.44984 14 3.34984 13.7667 3.34984 13.5V4H3.1665C3.02206 4 2.90262 3.95278 2.80817 3.85833C2.71373 3.76389 2.6665 3.64444 2.6665 3.5C2.6665 3.35556 2.71373 3.23611 2.80817 3.14167C2.90262 3.04722 3.02206 3 3.1665 3H5.79984C5.79984 2.85556 5.84706 2.73611 5.9415 2.64167C6.03595 2.54722 6.15539 2.5 6.29984 2.5H9.69984C9.84428 2.5 9.96373 2.54722 10.0582 2.64167C10.1526 2.73611 10.1998 2.85556 10.1998 3H12.8332C12.9776 3 13.0971 3.04722 13.1915 3.14167C13.2859 3.23611 13.3332 3.35556 13.3332 3.5C13.3332 3.64444 13.2859 3.76389 13.1915 3.85833C13.0971 3.95278 12.9776 4 12.8332 4H12.6498V13.5C12.6498 13.7667 12.5498 14 12.3498 14.2C12.1498 14.4 11.9165 14.5 11.6498 14.5H4.34984ZM4.34984 4V13.5H11.6498V4H4.34984ZM7.99984 9.5L9.59984 11.1167C9.72206 11.2278 9.85817 11.2833 10.0082 11.2833C10.1582 11.2833 10.2887 11.2278 10.3998 11.1167C10.5109 11.0056 10.5693 10.8722 10.5748 10.7167C10.5804 10.5611 10.5221 10.4333 10.3998 10.3333L8.79984 8.7L10.3998 7.06667C10.5109 6.95556 10.5693 6.82222 10.5748 6.66667C10.5804 6.51111 10.5221 6.38333 10.3998 6.28333C10.2887 6.17222 10.1554 6.11667 9.99984 6.11667C9.84428 6.11667 9.71095 6.17222 9.59984 6.28333L7.99984 7.9L6.4165 6.28333C6.3165 6.16111 6.18873 6.10278 6.03317 6.10833C5.87761 6.11389 5.73873 6.17222 5.6165 6.28333C5.49428 6.39444 5.43595 6.525 5.4415 6.675C5.44706 6.825 5.50539 6.96111 5.6165 7.08333L7.2165 8.7L5.6165 10.3167C5.50539 10.4278 5.44984 10.5583 5.44984 10.7083C5.44984 10.8583 5.50539 10.9944 5.6165 11.1167C5.73873 11.2278 5.87484 11.2833 6.02484 11.2833C6.17484 11.2833 6.30539 11.2278 6.4165 11.1167L7.99984 9.5Z" />
        </svg>
    )
}

DeleteIcon.defaultProps = {
    fill: '#A1A1AA',
    width: 24,
    height: 24,
};