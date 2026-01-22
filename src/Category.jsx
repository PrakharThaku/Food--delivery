import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza, GiHamburger } from "react-icons/gi";
import { MdOutlineFoodBank, MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { TiThSmallOutline } from "react-icons/ti";

 const categories = [
    {
id:1,
name: "All",
image : <TiThSmallOutline className="w-14 h-14 text-green-600"/>
    },
    {
id:2,
name: "breakfast",
image : <MdOutlineFreeBreakfast className="w-14 h-14 text-green-600"/>
    },
    {
id:3,
name: "soup",
image : <TbSoup className="w-14 h-14 text-green-600"/>
    },
    {
id:4,
name: "pasta",
image : <CiBowlNoodles className="w-14 h-14 text-green-600"/>
    },
    {
id:5,
name: "main_course",
image : <MdOutlineFoodBank className="w-14 h-14 text-green-600"/>
    },
    {
id:6,
name: "pizza",
image : <GiFullPizza className="w-14 h-14 text-green-600"/>
    },
    {
id:7,
name: "burger",
image : <GiHamburger className="w-14 h-14 text-green-600"/>
    },
]


export default categories ;