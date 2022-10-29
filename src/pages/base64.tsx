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
            <h1 className="text-xl font-bold">Base64 convertion</h1>
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
                        Base64 Conversion
                    </label>
                    <Textarea
                        onChange={(e) => setConverted(e.target.value)}
                        value={converted}
                        id="converted"
                        className="h-full"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Base64;
