import { H1, H3 } from "~/components/typography";

export default function Home() {
    return (
        <div className={"flex flex-col gap-3"}>
            <H1>Mao</H1>
            <H3>Select one of the utilities from the menu.</H3>
        </div>
    );
}
