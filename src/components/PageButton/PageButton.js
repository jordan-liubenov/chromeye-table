import "../PageButton/PageButton.css";

const PageButton = (props) => {
  //props: props.page, props.setPage
  //render as many buttons as page count
  //page count will be equal to userArray.length / paging size
  let buttonArr = [];
  const pageCount = Math.ceil(props.users.length / props.pagingSize);

  //set amount of buttons to be rendered
  for (let i = 1; i <= pageCount; i++) {
    buttonArr.push(
      <button key={i} value={i} onClick={() => props.setPage(i)}>
        {i}
      </button>
    );
  }

  return <div className="pageButton">{buttonArr}</div>;
};

export default PageButton;
