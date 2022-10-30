import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Textarea from "../components/textarea";
import toBase64 from "../utils/toBase64";

const Base64 = () => {
    const [text, setText] = useState("");
    const [converted, setConverted] = useState(text);
    const [editingText, setEditingText] = useState(false);
    const [editingImage, setEditingImage] = useState(false);

    const hanleConvertToImage = () => {
        const link = document.createElement("a");
        link.href = "data:;base64," + converted;
        link.download = `download-${Date.now()}`;
        link.click();
        link.remove();
    };

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
        !editingText && !editingImage && setText(atob(converted));
    }, [converted, editingText, editingImage]);

    useEffect(() => {
        editingImage && setConverted(btoa(text));
    }, [text, editingImage]);

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
                            onChange={async (e) => {
                                const files = e.target.files;
                                if (!files || files.length == 0) return;
                                const file = files[0];
                                if (file) {
                                    setEditingText(true);
                                    setEditingImage(true);
                                    setConverted(await toBase64(file));
                                } else {
                                    console.log("no file");
                                }
                            }}
                        />
                        <div
                            className="tooltip tooltip-right"
                            data-tip="Converts Text within the base64 conversion box to an image"
                        >
                            <label className="btn btn-primary" htmlFor="image-converstion" onClick={hanleConvertToImage}>
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
                        <Textarea onChange={(e) => setText(e.target.value)} value={text} id="text" className="flex-1" />
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
