import Link from "next/link";

type UtilItemCardProps = {
    name: string;
    description: string;
    href: string;
};

const UtilItemCard = ({ name, description, href }: UtilItemCardProps) => {
    return (
        <Link href={href}>
            <a className="  mt-3 flex flex-auto content-center items-center text-center text-sm">
                <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 hover:shadow-selected  motion-safe:hover:scale-105">
                    <h2 className="text-lg text-gray-300">{name}</h2>
                    <p className="text-sm text-gray-400">{description}</p>
                </section>
            </a>
        </Link>
    );
};

export default UtilItemCard;
