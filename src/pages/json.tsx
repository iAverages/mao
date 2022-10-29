import { useEffect, useState } from "react";
import Layout from "../components/layout";
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
        <Layout title="Prettify JSON" desc="Quick and simple JSON pretty print">
            <div className="flex h-full  flex-col">
                <h1 className="text-xl font-bold">JSON pretty print</h1>
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
                            Prettiered JSON
                        </label>
                        <Textarea
                            value={converted}
                            id="converted"
                            className="flex-1"
                            selectOnClick
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Base64;
