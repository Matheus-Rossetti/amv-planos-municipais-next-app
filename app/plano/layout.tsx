import React from "react";

export default function PlanoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ padding: 0 }}>{ children }</div>
    );
}
