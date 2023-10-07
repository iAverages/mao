import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Textarea from "../components/textarea";
import toBase64 from "../utils/toBase64";

const EDITING = ["text", "base64"] as const;

const Base64 = () => {
    const [text, setText] = useState("");
    const [converted, setConverted] = useState(text);
    const [editingText, setEditingText] = useState(false);
    const [editingState, setEditingState] = useState<(typeof EDITING)[number]>(editingText ? "text" : "base64");

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length == 0) return;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const file = files[0]!;
        setText("");
        setEditingText(true);
        setConverted(await toBase64(file));
    };

    const handleConvertToImage = () => {
        const link = document.createElement("a");
        link.href = "data:;base64," + converted;
        link.download = `download-${Date.now()}`;
        link.click();
        link.remove();
    };
    useEffect(() => {
        if (editingState == "text") {
            try {
                setConverted(btoa(text));
            } catch (error) {
                setConverted("Invalid text");
            }
        }
    }, [text, editingState]);

    useEffect(() => {
        if (editingState == "base64") {
            try {
                setText(atob(converted));
            } catch (error) {
                setText("Invalid text");
            }
        }
    }, [converted, editingState]);

    return (
        <Layout title="Base64 text conversion">
            <div className="flex h-full  flex-col">
                <h1 className="text-xl font-bold">Base64 convertion</h1>
                <div>
                    <h2>Upload image</h2>
                    <div className="flex gap-3 py-3">
                        <input
                            className="file-input file-input-bordered w-full max-w-xs"
                            type="file"
                            onChange={handleFileUpload}
                        />
                        <div
                            className="tooltip tooltip-right"
                            data-tip="Converts Text within the base64 conversion box to an image"
                        >
                            <label className="btn btn-primary" htmlFor="image-converstion" onClick={handleConvertToImage}>
                                Convert Text to Image
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-1 flex-col gap-5 sm:flex-row">
                    <div className="flex h-full w-full flex-col">
                        <label className="text-lg" htmlFor="text">
                            Text
                        </label>
                        <Textarea
                            onChange={(e) => {
                                setEditingState("text");
                                setText(e.target.value);
                            }}
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
                            onChange={(e) => {
                                setEditingState("base64");
                                setConverted(e.target.value);
                            }}
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
