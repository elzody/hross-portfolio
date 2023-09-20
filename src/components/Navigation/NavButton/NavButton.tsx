interface NavButtonProps {
    title: string;
    selected: boolean;
    onClick: (componentTitle: string) => void;
}

const NavButton = (props: NavButtonProps) => {
    return (
        <button
            type="button"
            onClick={() => props.onClick(props.title)}
            style={{ color: props.selected ? "#81a1c1" : "#eceff4" }}>
            {props.title}
        </button>
    );
}

export default NavButton;