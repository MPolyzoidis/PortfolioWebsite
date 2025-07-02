import { twMerge } from "tailwind-merge";

const TechIcon = ({
    component,
    className,
}: {
    component: React.ElementType;
    className?: string;
}) => {
    const Component = component;

    return <Component className={twMerge("size-10 fill-white", className)} />;
};

export default TechIcon;
