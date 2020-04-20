import * as React from "react";
import { useTransition, animated } from "react-spring";

const FadeInComp: React.FC<AppProps> = () => {
    const [leadIns, setleadIns] = React.useState<ILeadIn[]>([
        {
            id: 0,
            title:
                "Artists and creatives can use it to collaborate, literally watching their ideas grow as they expand on concepts together"
        },
        {
            id: 1,
            title: "Teachers can create a visual map of their student's understanding"
        },
        {
            id: 2,
            title:
                "Businesses can poll customers to get a representation of their needs and desires"
        },
        {
            id: 3,
            title:
                "Group Projects can use the app to brainstorm ideas and even vote on decisions"
        }
    ]);

    const [index, setIndex] = React.useState(0);

    const fadingTextPropsTransition = useTransition(
        leadIns[index],
        (item: any) => item.id,
        {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: { tension: 220, friction: 120 }
        }
    );

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex(state => (state + 1) % leadIns.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [leadIns.length]);

    return (
        <>
            {fadingTextPropsTransition.map(({ item, props, key }) => (
                <animated.div key={key} style={{ ...props, position: "absolute", zIndex: 2 }}>
                    <h1 style={{ fontSize: "0.85em" }}>{item.title}</h1>
                </animated.div>
            ))}
        </>
    );
};

interface ILeadIn {
    id: number;
    title: string;
}

interface AppProps { }

export default FadeInComp;