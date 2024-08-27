import { BLUEJAY_DEV } from "bluejay";
import type { JSX } from "preact";

export interface PageProps {
    title: string;
    description: string;
    children: JSX.Element | JSX.Element[];
    default: () => JSX.Element;
}

export default ({ title, description, children }: PageProps) => (
    <>
        <head>
            <title>{title}</title>
            <link rel="icon" href="/icon.png" />
            <link rel="stylesheet" href="/index.css" />
            <meta charset="utf8" />
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width" />
        </head>
        <body>
            <main class="content">{children}</main>
            <BLUEJAY_DEV />
        </body>
    </>
);
