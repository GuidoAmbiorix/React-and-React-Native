import React from "react";
import PropTypes from 'prop-types';


function ArticleItem({ article, onClickRemove }) {
  const [isOpened, setIsOpened] = React.useState(article.display !== "none");

  const onClickToggle = React.useCallback(() => {
    setIsOpened((state) => !state);
  }, []);

  return (
    <li>
      <a href={`#${article.id}`} title="Toggle Summary" onClick={onClickToggle}>
        {article.title}
      </a>
      &nbsp;
      <button
        href={`#${article.id}`}
        title="Remove"
        onClick={() => onClickRemove(article.id)}
      >
        &#10007;
      </button>
      <p style={{ display: isOpened ? "block" : "none" }}>{article.summary}</p>
    </li>
  );
}

ArticleItem.propTypes = {
    article:   PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        display: PropTypes.string.isRequired
    }), 
    onClickRemove:PropTypes.func.isRequired
}

export default ArticleItem;