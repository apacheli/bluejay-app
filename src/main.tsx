import { start } from "bluejay";

import Page, { type PageProps } from "@components/Page";

start<PageProps>({
    assets: "src/assets",
    dir: process.cwd(),
    dist: "dist",
    mode: Bun.env.BUILD_MODE as "build" | "serve",
    pages: "src/pages",
    path: "",
    render: (page) => {
        return (
            <Page {...page.mod}>
                <page.mod.default />
            </Page>
        );
    },
});
