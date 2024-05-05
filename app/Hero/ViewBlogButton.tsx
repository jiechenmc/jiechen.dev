import Link from 'next/link';
import { Icon } from '@iconify/react';

const ViewBlogButton = () => {
    return (<Link
        className="btn btn-accent text-content"
        href="https://blog.jiechen.dev"
    >
        <Icon icon="mdi:blog-outline" width="24" height="24" />
    </Link>);
}

export default ViewBlogButton;