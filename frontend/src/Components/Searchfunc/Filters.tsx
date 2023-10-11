import { cardData } from "../../api/carddata"

const Filters = () => {
  return (
    <div className="filteritems grid grid-cols-3 grid-rows-3 gap-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={
                "filtercards group rounded-xl cursor-pointer hover:scale-110 transition-all duration-300 shadow-md border hover:border-richtextdark"
              }
            >
              <h1 className="text-textdark text-center">
                {card.title}{" "}
                <span className="group-hover:text-richtextdark">
                  {card.subtitle}
                </span>{" "}
              </h1>
            </div>
          ))}
        </div>
  )
}

export default Filters