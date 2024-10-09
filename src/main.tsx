import { start } from "bluejay";

import Page, { type PageProps } from "@components/Page";

start<PageProps>({
    assets: "src/assets",
    dir: Bun.cwd,
    dist: "dist",
    pages: "src/pages",
    render: (page) => {
        return (
            <Page {...page.mod}>
                <page.mod.default />
            </Page>
        );
    },
});
