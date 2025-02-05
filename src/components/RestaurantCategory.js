import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccordionItemList from "./AccordionItemList";

// Add the solid (fas) icon library to the Font Awesome library
library.add(fas);

function RestaurantCategory({ datas, showItems, setShowIndex }) {
    // const [showItems, setShowItems] = useState(false);
  // console.log(datas);
  const handleClick = () => {
    setShowIndex(); // Parent component should toggle based on current state
  };

  return (
    <div className="my-4 mx-auto shadow-lg p-2 bg-slate-100 w-6/12">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {datas.title} ({datas?.itemCards.length})
        </span>
        <span>
          <FontAwesomeIcon icon="fa-solid fa-caret-down" className={showItems ? "rotate-180" : ""} />
        </span>
      </div>
      {showItems && <AccordionItemList items={datas?.itemCards} />}
    </div>
  );
}

export default RestaurantCategory;