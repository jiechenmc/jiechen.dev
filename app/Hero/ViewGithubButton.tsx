import { Icon } from '@iconify/react';
import Link from 'next/link';

const ViewGithubButton = () => {
    return (<Link
        className="btn btn-accent"
        href="https://github.com/jiechenmc"
    >
        <Icon icon="mdi:github" color='white' width="24" height="24" />
    </Link>);
}

export default ViewGithubButton;