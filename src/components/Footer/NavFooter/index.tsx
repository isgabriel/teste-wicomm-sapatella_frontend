interface NavFooterProps {
    title: string;
    navItems: string[];
}

const NavFooter = ({ title, navItems }: NavFooterProps) => {
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href="#" onClick={ScrollToTop}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { NavFooter };
