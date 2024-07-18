import PropTypes from 'prop-types';

function ArticleList({ articles, onClickToggle, onClickRemove }) {
    return (
        <ul>
            {articles.map((i) => (
                <li key={i.id}>
                    <a
                        href={`#${i.id}`}
                        title="Toggle Summary"
                        onClick={() => onClickToggle(i.id)}
                    >
                        {i.title}
                    </a>
                    &nbsp;
                    <button
                        title="Remove"
                        onClick={() => onClickRemove(i.id)}
                    >
                        &#10007;
                    </button>
                    <p style={{ display: i.display }}>{i.summary}</p>
                </li>
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
    onClickToggle: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired
};

export default ArticleList;
