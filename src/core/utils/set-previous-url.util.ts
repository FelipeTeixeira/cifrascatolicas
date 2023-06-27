import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

export function setPreviousUrl(context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>, urlFallback: string): string {
    const referer = context.req.headers.referer;
    const previousUrl = referer && !(referer.includes(context.resolvedUrl)) ? new URL(referer).pathname : urlFallback;
    return previousUrl;
}
