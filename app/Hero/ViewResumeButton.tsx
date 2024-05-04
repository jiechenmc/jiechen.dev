import { Icon } from '@iconify/react';
import Link from 'next/link';

const ViewResumeButton = () => {
    return (
        <Link
            className="btn btn-accent"
            href="https://drive.google.com/file/d/1YYvgQczc_2N1tn6oSFrAqZYatgVpykkL/view"
        >
            <Icon icon="mdi:resume" width="24" height="24" />
        </Link>
    );
};

export default ViewResumeButton;