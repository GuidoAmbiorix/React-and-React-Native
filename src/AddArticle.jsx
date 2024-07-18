
import PropTypes from 'prop-types';


function AddArticle({
    name,
    title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd,
  }) {
    return (
      <section>
        <h1>{name}</h1>
        <input placeholder="Title" value={title} onChange={onChangeTitle} />
        <input placeholder="Summary" value={summary} onChange={onChangeSummary} />
        <button onClick={onClickAdd}>Add</button>
      </section>
    );
  }

  
  AddArticle.propTypes = {
   name:  PropTypes.string.isRequired,
   title:PropTypes.string.isRequired,
   summary:PropTypes.string.isRequired,
   onChangeTitle:PropTypes.func.isRequired,
   onChangeSummary:PropTypes.func.isRequired,
   onClickAdd:PropTypes.func.isRequired
}

export default AddArticle;