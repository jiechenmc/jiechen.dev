import React from "react";
import table from "./icons";
import { Icon } from "@iconify/react";

const getIconElement = (iconName: string) => {
    const iconQuery = iconName.toLowerCase().replace(" ", "_");
    return (
        <div key={crypto.randomUUID()} className="tooltip capitalize" data-tip={iconName}>
            {table[iconQuery] ?? (
                <Icon icon="emojione:warning" width="24" height="24" />
            )}
        </div>
    );
};

export default getIconElement;