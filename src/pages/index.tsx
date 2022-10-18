import type { NextPage } from "next";
import Layout from "../components/layout";
import UtilItemCard from "../components/utilCard";

const Home: NextPage = () => {
    return (
        <Layout>
            <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
                <h1 className="text-5xl font-extrabold leading-normal text-gray-300 md:text-[5rem]">
                    Useful <span className="text-purple-700">Utilities</span>{" "}
                    App
                </h1>
                <p className="text-2xl text-gray-300">The tools included:</p>
                <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-2 lg:w-2/3">
                    <UtilItemCard
                        name="Base64 Conversion"
                        description="Simple clientside base64 convertion tool"
                        href="/base64"
                    />
                    <UtilItemCard
                        name="JSON Pretty Print"
                        description="Make ugly JSON pretty"
                        href="/json"
                    />
                </div>
            </main>
        </Layout>
    );
};

export default Home;
