import { useState } from "react";
import Input from "../../components/input";
import Layout from "../../components/layout";
import { v4 as uuidv4 } from "uuid";
const Uuid = () => {
    const [text, setText] = useState("");

    const handleGenerate = () => setText(uuidv4());

    const handleCopy = () => navigator.clipboard.writeText(text);

    return (
        <Layout title="Generate UUID v4" desc="Quickly generate a UUID v4 string">
            <div className="m-auto flex h-full w-1/2 flex-col gap-4">
                <h1 className="text-xl font-bold">Generate UUID v4</h1>

                <button className="btn btn-primary" onClick={handleGenerate}>
                    Generate
                </button>
                <Input className="w-full" value={text} />
                <button className="btn" onClick={handleCopy}>
                    Copy
                </button>
            </div>
        </Layout>
    );
};

export default Uuid;
