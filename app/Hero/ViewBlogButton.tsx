import Link from 'next/link';

const ViewBlogButton = () => {
    return (<Link
        className="btn btn-accent text-content"
        href="https://blog.jiechen.dev"
    >
        Check out my blogs :D
    </Link>);
}

export default ViewBlogButton;