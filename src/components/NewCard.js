import React from "react";
import Card from "./Card";
function NewCard({ data }) {
  console.log(data);
  return (
    <div className="cards">
      {data &&
        data.map((item) => (
          <Card
            Name={item.Name}
            Purpose={item.Purpose}
            Rating={item.Rating}
            Recc={item.Recc}
          ></Card>
        ))}
    </div>
  );
}

export default NewCard;
