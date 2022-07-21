import "../PageSizeButton/PageSizeButton.css";

const PageSizeButton = (props) => {
  //props; pagingSize={pagingSize} setPagingSize={setPagingSize}

  return (
    <div className="dropdown">
      <select
        name="dropdown"
        defaultValue={3}
        onChange={(e) => props.setPagingSize(e.target.value)}
      >
        Select
        <option value={1}>--1--</option>
        <option value={3}>--3--</option>
        <option value={5}>--5--</option>
        <option value={9}>--All--</option>
      </select>
    </div>
  );
};

export default PageSizeButton;
