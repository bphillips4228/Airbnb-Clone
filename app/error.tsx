'use client';

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";
import { title } from "process";

interface ErrorStateProps {
    error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({
    error
}) => {
    useEffect(() => {
        console.error(error);
    }, []);

    return (
        <EmptyState
            title="Uh Oh"
            subtitle="Something went wrong!"
        />
    )
};

export default ErrorState;