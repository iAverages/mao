import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Textarea from "../components/textarea";
import toBase64 from "../utils/toBase64";

const EDITING = ["text", "base64"] as const;

const Base64 = () => {
    const [text, setText] = useState("");
    const [length, setLength] = useState(text.length);

    useEffect(() => {
        setLength(text.length);
    }, [text]);

    return (
        <Layout title="Base64 text conversion">
            <div className="flex h-full  flex-col">
                <h1 className="text-xl font-bold">Length of Text</h1>
                <div className="w-full flex-1 flex-col gap-5 sm:flex-row">
                    <div className="my-4 flex h-24 w-full flex-col">
                        <Textarea
                            onChange={(e) => {
                                setText(e.target.value);
                            }}
                            className="flex-1"
                        />
                    </div>
                    <p>{length} characters</p>
                </div>
            </div>
        </Layout>
    );
};

export default Base64;
