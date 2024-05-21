import { Icon } from "@iconify/react";
import Image from "next/image";

const width = 24;
const height = 24;

const ICONS: { [key: string]: React.ReactNode } = {
    ebpf: <Image src="/thumbnails/ebpf.png" width={width} height={height} alt="ebpf logo" />,
    markdown: <Icon icon="logos:markdown" className="dark:fill-white" width={width} height={height} />,
    javascript: <Icon icon="logos:javascript" width={width} height={height} />,
    traefik: <Icon icon="devicon:traefikproxy" width={width} height={height} />,
    cloudflare: <Icon icon="logos:cloudflare-icon" width={width} height={height} />,
    amazon_web_services: <Icon icon="logos:aws" width={width} height={height} />,
    jquery: <Icon icon="devicon:jquery" width={width} height={height} />,
    google_cloud: <Icon icon="logos:google-cloud" width={width} height={height} />,
    ".net_core": <Icon icon="devicon:dotnetcore" width={width} height={height} />,
    css: <Icon icon="logos:css-3" width={width} height={height} />,
    html: <Icon icon="logos:html-5" width={width} height={height} />,
    "c#": <Icon icon="logos:c-sharp" width={width} height={height} />,
    azure: <Icon icon="logos:microsoft-azure" width={width} height={height} />,
    react: <Icon icon="logos:react" width={width} height={height} />,
    playwright: <Icon icon="logos:playwright" width={width} height={height} />,
    typescript: (
        <Icon icon="logos:typescript-icon" width={width} height={height} />
    ),
    python: <Icon icon="logos:python" width={width} height={height} />,
    firebase: <Icon icon="logos:firebase" width={width} height={height} />,
    mysql: <Icon icon="logos:mysql-icon" width={width} height={height} />,
    flask: <Icon className="dark:fill-white" icon="logos:flask" width={width} height={height} />,
    docker: <Icon icon="logos:docker-icon" width={width} height={height} />,
    bash: <Icon icon="logos:bash-icon" width={width} height={height} />,
    fastapi: <Icon icon="logos:fastapi-icon" width={width} height={height} />,
    mongodb: <Icon icon="logos:mongodb-icon" width={width} height={height} />,
    digitalocean: <Icon icon="logos:digital-ocean-icon" width={width} height={height} />,
    heroku: <Icon icon="logos:heroku-icon" width={width} height={height} />,
    tailwindcss: (
        <Icon icon="logos:tailwindcss-icon" width={width} height={height} />
    ),
    nginx: <Icon icon="logos:nginx" width={width} height={height} />,
    "solid.js": <Icon icon="logos:solidjs-icon" width={width} height={height} />,
    sqlite: <Icon icon="logos:sqlite" width={width} height={height} />,
    github_actions: (
        <Icon icon="logos:github-actions" width={width} height={height} />
    ),
    go: <Icon icon="logos:go" width={width} height={height} />,
    c: <Icon icon="logos:c" width={width} height={height} />,
    deno: <Icon icon="logos:deno" width={width} height={height} />,
    "node.js": <Icon icon="logos:nodejs-icon" width={width} height={height} />,
    java: <Icon icon="logos:java" width={width} height={height} />,
    fresh: <Icon icon="logos:fresh" width={width} height={height} />,
    puppeteer: <Icon icon="logos:puppeteer" width={width} height={height} />,
    "next.js": <Icon icon="logos:nextjs-icon" width={width} height={height} />,
    terraform: <Icon icon="logos:terraform-icon" width={width} height={height} />,
    kubernetes: <Icon icon="logos:kubernetes" width={width} height={height} />,
    grafana: <Icon icon="logos:grafana" width={width} height={height} />,
    prometheus: <Icon icon="logos:prometheus" width={width} height={height} />,
};

export default ICONS;