import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemList from "./ItemList";

// Add the solid (fas) icon library to the Font Awesome library
library.add(fas);

function RestaurantCategory({ datas, showItems, setShowIndex }) {
  // const [showItems, setShowItems] = useState(false);
  // console.log(datas);
  function handleClick() {
    setShowIndex();
  }

  return (
    <div>
      {/* <div>header</div> */}
      <div className="my-4 mx-auto shadow-lg  p-2 bg-slate-100 w-6/12">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {datas.title}({datas?.itemCards.length})
          </span>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-caret-down" />
          </span>
        </div>
        {showItems && <ItemList items={datas?.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategory;
