import React, { useState, useEffect } from "react";
import table from "./icons";
import { Icon } from "@iconify/react";

const useIcon = (iconName: string) => {
    const iconQuery = iconName.toLowerCase().replace(" ", "_");
    const [icon, setIcon] = useState<React.ReactElement>();

    useEffect(() => {
        setIcon(
            table[iconQuery] ?? (
                <Icon icon="emojione:warning" width="24" height="24" />
            )
        );
    }, [iconQuery]);

    return (
        <div key={crypto.randomUUID()} className="tooltip capitalize" data-tip={iconName}>
            {icon}
        </div>
    );
};

export default useIcon;