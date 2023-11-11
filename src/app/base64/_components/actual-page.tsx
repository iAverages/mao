"use client";

import { useEffect, useState } from "react";
import { set } from "zod";
import { H3 } from "~/components/typography";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/components/ui/use-toast";

const DEFAULT_VALUE = "";

const decode = (data: string) => {
    return btoa(data);
};

const encode = (data: string) => {
    return atob(data);
};

export default function Json() {
    const { toast } = useToast();

    const [decodedData, setDecodedData] = useState(DEFAULT_VALUE);
    const [encodedData, setEncodedData] = useState(DEFAULT_VALUE);

    const handleCopy = (data: string) => {
        void navigator.clipboard.writeText(data);
        toast({
            title: "Copied",
            description: "Copied to clipboard",
        });
    };

    const handleChange = (type: "encode" | "decode", data: string) => {
        try {
            if (type === "encode") {
                setDecodedData(decode(data));
                setEncodedData(data);
            } else {
                setEncodedData(encode(data));
                setDecodedData(data);
            }
        } catch (e) {
            console.error(e);
            toast({
                title: "Error",
                description: "Failed to decode",
            });
        }
    };

    return (
        <div className={"flex h-full flex-col gap-2"}>
            <H3>Base64 Encode/Decode</H3>
            <div className={"grid h-full  gap-4 sm:grid-cols-2"}>
                <div className={"flex h-full flex-col gap-2"}>
                    <Button
                        variant={"ghost"}
                        className={"w-min"}
                        onClick={() => {
                            handleCopy(encodedData);
                        }}
                    >
                        Copy
                    </Button>
                    <Textarea
                        className={"flex-grow"}
                        value={encodedData}
                        onChange={(e) => {
                            handleChange("encode", e.target.value);
                        }}
                    />
                </div>
                <div className={"flex h-full flex-col gap-2"}>
                    <Button
                        variant={"ghost"}
                        className={"w-min"}
                        onClick={() => {
                            handleCopy(decodedData);
                        }}
                    >
                        Copy
                    </Button>
                    <Textarea
                        className={"flex-grow"}
                        value={decodedData}
                        onChange={(e) => {
                            handleChange("decode", e.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
