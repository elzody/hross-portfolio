import "./SectionHeader.css";

interface SectionHeaderProps {
    header: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
    return (
        <div className="sectionHeader">
            <svg>
                <rect rx="4" ry="4"></rect>
            </svg>

            <span className="sectionName">{props.header}</span>
        </div>
    );
}

export default SectionHeader;