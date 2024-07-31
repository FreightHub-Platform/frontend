import React from "react";
import { Progress } from "@nextui-org/react";

interface ProgressBarProps {
    value: number;
}

export default function ProgressBar({ value }: Readonly<ProgressBarProps>) {
    return (
        <Progress
            aria-label="Completed..."
            size="md"
            value={value}
            color="primary"
            showValueLabel={true}
            className="max-w-md"
        />
    );
}
