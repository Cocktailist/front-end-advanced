import * as S from "./style";

const Btn = ({ status, handleClick: setStatus }) => {
  const handleClick = (event) => {
    switch (status) {
      case "inOrder":
        setStatus("inServe");
        break;
      case "inServe":
        setStatus("doneOrder");
        break;
      default:
        return;
    }
  };

  return (
    <>
      <S.Btn onClick={handleClick} status={status}>
        {(() => {
          switch (status) {
            case "inOrder":
              return "대기중";
            case "inServe":
              return "서빙중";
            case "doneOrder":
              return "주문완료";
            default:
              return "엇쩔티브이";
          }
        })()}
      </S.Btn>
    </>
  );
};

export default Btn;
