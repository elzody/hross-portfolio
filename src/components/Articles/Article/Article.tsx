import "./Article.css";

interface ArticleProps {
    title: string;
    image: string;
    preview: string;
    link: string;
}

const Article = (props: ArticleProps) => {
    return (
//        <a href={props.link} target="_blank">
            <article className="article">
                <img src={props.image} alt={props.title} />

                <h1 className="title">{props.title}</h1>

                <p className="preview">
                    {props.preview}
                </p>

                <span className="link">{props.link}</span>
            </article>
//        </a>
    );
}

export default Article;
