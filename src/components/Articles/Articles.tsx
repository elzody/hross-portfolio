import Article from "./Article/Article";
import data from "../../data/articles.json";

import "./Articles.css";

interface Article {
    title: string;
    preview: string;
    image: string;
    link: string;
}

interface ArticleProps {
    visible: boolean;
}

const Articles = (props: ArticleProps) => {
    const articles: Array<Article> = data;

    if (props.visible) {
        return (
            <section className="articles">
                {
                    articles.map(article => (
                        <Article
                            key={article.link}
                            title={article.title}
                            preview={article.preview}
                            image={article.image}
                            link={article.link}
                        />
                    ))
                }
            </section>
        );
    }
}

export default Articles;