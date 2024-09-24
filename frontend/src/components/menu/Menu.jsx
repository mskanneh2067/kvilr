import { Link } from "react-router-dom";
import { menuData } from "../../data/data";
import { FaHome } from "react-icons/fa";

const icons = [FaHome];
const Menu = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col gap-3 mb-3">
        {menuData.map((listItem) => (
          <Link
            to={listItem.url}
            className="flex items-center gap-3 p-3 rounded-md hover:bg-[#002c38] hover:text-white"
            key={listItem.id}
          >
            {icons.map((Icon, i) => (
              <Icon key={i} className="hidden md:block" />
            ))}
            <span className="listItemTitle font-normal">{listItem.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
