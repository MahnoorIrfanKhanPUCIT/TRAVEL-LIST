const Stats = ({ items }) => {
  //EARLY RETURN FOR A CONDITION
  if (!items.length)
    return (
      <div className="stats">
        <em>Start adding some items to your packing list 💥</em>
      </div>
    );

  //USING DERIVE STATE FOR STATICS
  const totalNum = items.length;
  // console.log(totalNum);

  const packedNum = items.filter((item) => item.packed).length;
  // console.log(packedNum);

  const percentage = Math.round((packedNum / totalNum) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything, Ready to go ✈</em>
      ) : (
        <em>
          👜 You have {totalNum} items in your list, and you have packed{" "}
          {packedNum} ({percentage}%)
        </em>
      )}
    </footer>
  );
};

export default Stats;
