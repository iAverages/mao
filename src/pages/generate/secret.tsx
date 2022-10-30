import { ChangeEventHandler, useState } from "react";
import Input from "../../components/input";
import Layout from "../../components/layout";

const Uuid = () => {
    const [text, setText] = useState("");
    const [length, setLength] = useState(16);

    const handleGenerate = () => {
        const secret = Array.from(window.crypto.getRandomValues(new Uint8Array(Math.ceil(length / 2))), (b) =>
            ("0" + (b & 0xff).toString(16)).slice(-2)
        ).join("");
        setText(secret);
    };

    const handleCopy = () => navigator.clipboard.writeText(text);

    const handleLengthChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        let value = parseInt(e.target.value);
        // Only allow even numbers
        value = value % 2 === 1 ? value + 1 : value;
        setLength(value);
    };

    return (
        <Layout title="Generate Secure Secret" desc="Quickly generate a secure string that can be used for secrets">
            <div className="m-auto flex h-full w-1/2 flex-col gap-4">
                <h1 className="text-xl font-bold">Generate secure string to be used for secrets</h1>
                <button className="btn btn-primary" onClick={handleGenerate}>
                    Generate
                </button>
                <input
                    type="range"
                    min="2"
                    max="128"
                    value={length}
                    onChange={handleLengthChange}
                    className="range range-primary"
                />
                <label className="input-group">
                    <span>{length}</span>
                    <Input className="w-full" value={text} />
                </label>
                <button className="btn" onClick={handleCopy}>
                    Copy
                </button>
            </div>
        </Layout>
    );
};

export default Uuid;
