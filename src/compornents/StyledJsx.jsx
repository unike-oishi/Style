export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSX</p>
        <button className="button">Fight</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px blue;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: red;
        }

        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          //使えないライブラリ
          &:hover {
            background-color: black;
            color: white;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
