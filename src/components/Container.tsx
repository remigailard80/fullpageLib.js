import React from "react";

interface ContainerProps {
    content: string;
};

function Container({ content }: ContainerProps) {
    return (
        <>
            <div>
                hello, { content }
            </div>
        </>
    );
};

export default Container;
