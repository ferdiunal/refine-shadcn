"use client";
import GitHubButton from "react-github-btn";

const Footer = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-y-2 sm:gap-y-0 gap-x-4">
            <div className="flex-1 flex items-center justify-start gap-x-4 text-sm">
                <a
                    href="https://refine.dev/docs/"
                    target="_blank"
                    className="flex flex-row items-center gap-x-2"
                >
                    <img src="/logo-mini.svg" className="w-5 h-5" />
                    Refine
                </a>
                <a
                    href="https://ui.shadcn.com/docs"
                    target="_blank"
                    className="flex flex-row items-center gap-x-2"
                >
                    <img
                        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' class='h-6 w-6'><rect width='256' height='256' fill='none'></rect><line x1='208' y1='128' x2='128' y2='208' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'></line><line x1='192' y1='40' x2='40' y2='192' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'></line></svg>"
                        className="w-5 h-5"
                    />
                    Shadcn
                </a>
            </div>
            <div className="flex-1 flex-col sm:flex-row items-start justify-start flex sm:justify-end gap-y-1 sm:gap-y-0 gap-x-4">
                <GitHubButton
                    href="https://github.com/ferdiunal/refine-shadcn/tree/main/examples/react-csr-vite"
                    data-color-scheme="no-preference: light; light: light; dark: dark;"
                    data-size="large"
                    aria-label="Use this template ferdiunal/refine-shadcn on GitHub"
                >
                    Use this example
                </GitHubButton>
                <GitHubButton
                    href="https://github.com/ferdiunal/refine-shadcn"
                    data-color-scheme="no-preference: light; light: light; dark: dark;"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star ferdiunal/refine-shadcn on GitHub"
                >
                    Star
                </GitHubButton>
                <GitHubButton
                    href="https://github.com/ferdiunal"
                    data-color-scheme="no-preference: light; light: light; dark: dark;"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Follow @ferdiunal on GitHub"
                >
                    Follow @ferdiunal
                </GitHubButton>
            </div>
        </div>
    );
};

export default Footer;
