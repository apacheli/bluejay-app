import { start } from "bluejay";
import renderToString from "preact-render-to-string";

import Page, { type PageProps } from "@components/Page";

start<PageProps>({
    assets: "src/assets",
    dir: Bun.cwd,
    dist: "dist",
    pages: "src/pages",
    render: (page) => {
        return renderToString(
            <Page {...page.mod}>
                <page.mod.default />
            </Page>
        );
    },
});
