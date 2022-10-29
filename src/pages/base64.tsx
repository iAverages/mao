import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Textarea from "../components/textarea";

const Base64 = () => {
    const [text, setText] = useState("");
    const [converted, setConverted] = useState(text);
    const [editingText, setEditingText] = useState(false);

    useEffect(() => {
        setEditingText(true);
    }, [text]);

    useEffect(() => {
        setEditingText(false);
    }, [converted]);

    useEffect(() => {
        editingText && setConverted(btoa(text));
    }, [text, editingText]);

    useEffect(() => {
        editingText || setText(atob(converted));
    }, [converted, editingText]);

    return (
        <Layout title="Base64 text conversion">
            <div className="flex h-full  flex-col">
                <h1 className="text-xl font-bold">Base64 convertion</h1>
                <div className="flex w-full flex-1 gap-5">
                    <div className="flex h-full w-full flex-col">
                        <label className="text-lg" htmlFor="text">
                            Text
                        </label>
                        <Textarea
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                            id="text"
                            className="flex-1"
                        />
                    </div>
                    <div className="flex h-full w-full flex-col">
                        <label className="text-lg" htmlFor="converted">
                            Base64 Conversion
                        </label>
                        <Textarea
                            onChange={(e) => setConverted(e.target.value)}
                            value={converted}
                            id="converted"
                            className="flex-1"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Base64;
