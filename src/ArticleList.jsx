import PropTypes from 'prop-types';
import ArticleItem from './ArticleItem';

function ArticleList({ articles, onClickRemove }) {
    return (
        <ul>
            {articles.map((article) => (
                <ArticleItem key={article.id.value} article={article} onClickRemove={onClickRemove} />
            ))}
        </ul>
    );
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            display: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickRemove: PropTypes.func.isRequired
};

export default ArticleList;
