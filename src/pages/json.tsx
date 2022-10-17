import Head from "next/head";
import { useEffect, useState } from "react";
import Textarea from "../components/textarea";

const Base64 = () => {
    const [text, setText] = useState("{}");
    const [converted, setConverted] = useState(text);

    useEffect(() => {
        try {
            setConverted(JSON.stringify(JSON.parse(text), null, 4));
        } catch (e) {
            setConverted("Invalid JSON string");
        }
    }, [text]);

    return (
        <div className="m-5 h-full">
            <Head>
                <title>Base64 text conversion</title>
            </Head>
            <h1 className="text-xl font-bold">JSON pretty print</h1>
            <div className="flex h-full gap-5">
                <div className="w-full">
                    <label className="text-lg" htmlFor="text">
                        Text
                    </label>
                    <Textarea
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        id="text"
                        className="h-full"
                    />
                </div>
                <div className="w-full">
                    <label className="text-lg" htmlFor="converted">
                        Prettiered JSON
                    </label>
                    <Textarea
                        disabled
                        value={converted}
                        id="converted"
                        className="h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Base64;
