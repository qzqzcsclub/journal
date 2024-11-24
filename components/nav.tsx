"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

const NavItem: React.FC<{
    text: string
    href: string
    newTab?: boolean
}> = (props) => {
    return (
        <a
            className="flex gap-2 items-center *:text-stone-700"
            href={props.href}
            target={props.newTab ? "_blank" : "_self"}
            rel="noreferrer">
            <span>{props.text}</span>
            {props.newTab && <ExternalLink size={18}/>}
        </a>
    );
}

const Nav: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        document.body.addEventListener("wheel", (e) => setVisible(e.deltaY < 0));
    }, []);

    return (
        <nav
            className="w-full px-96 max-2xl:px-80 max-xl:px-60 max-lg:px-20 max-md:px-10 py-4 font-semibold flex gap-6 fixed top-0 bg-gradient-to-b from-white to-transparent transition-all ease-out duration-[250ms]"
            style={{ transform: visible ? "translateY(0)" : "translateY(-3.5rem)" }}>
            <NavItem text="Home" href="/"/>
            <NavItem text="Archive" href="/archive"/>
            <NavItem text="Repo" href="https://github.com/qzqzcsclub/journal" newTab/>
            <NavItem text="Contribute" href="https://github.com/qzqzcsclub/journal/blob/main/Fundamentals-of-Journal.md" newTab/>
        </nav>
    );
}

export default Nav;
