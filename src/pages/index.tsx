import type { NextPage } from "next";
import Layout from "../components/layout";
import UtilItemCard from "../components/utilCard";

const Home: NextPage = () => {
    return (
        <Layout>
            <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
                <h1 className="text-5xl font-extrabold leading-normal text-gray-300 md:text-[5rem]">
                    Useful <span className="text-purple-700">Utilities</span> App
                </h1>
                <p className="text-2xl text-gray-300">The tools included:</p>
                <div className="mt-3 flex flex-row flex-wrap content-center items-stretch justify-around gap-4">
                    <UtilItemCard
                        name="Base64 Conversion"
                        description="Simple clientside base64 convertion tool"
                        href="/base64"
                    />
                    <UtilItemCard name="JSON Pretty Print" description="Make ugly JSON pretty" href="/json" />
                    <UtilItemCard name="Generate UUID v4" description="Quickly generate a UUID v4 string" href="/generate/uuid" />
                    <UtilItemCard
                        name="Generate Secure Secret"
                        description="Quickly generate a secure string that can be used for secrets"
                        href="/generate/secret"
                    />
                    <UtilItemCard name="String Length" description="Gives you the length of a string" href="/length" />
                </div>
            </main>
        </Layout>
    );
};

export default Home;
