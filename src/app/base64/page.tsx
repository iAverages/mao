"use client";

import dynamic from "next/dynamic";

const Base64Page = dynamic(() => import("~/app/base64/_components/actual-page"), {
    ssr: false,
});

export default function Json() {
    return <Base64Page />;
}
