import Cover from "../../shared/MenusCover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../Hooks/UseHooks";
import SectionTitle from "../../components/SectionTitle";
import MenuCetagory from "./MenuCetagory";

const Menu = () => {
    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category === 'dessert');
    const soup=menu.filter(item=>item.category === 'soup');
    const salad=menu.filter(item=>item.category === 'salad');
    const pizza=menu.filter(item=>item.category === 'pizza');
    const offered=menu.filter(item=>item.category === 'offered');

    return (
        <div>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <SectionTitle
            subHeading={"Don't miss"}
            heading={'Todays Offers'}
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCetagory
            items={offered}
            ></MenuCetagory>
            {/* dessert menu items */}
            <MenuCetagory
            items={dessert}
            title={'dessert'}
            img={dessertImg}
            ></MenuCetagory>
            {/* pizza menu */}
            <MenuCetagory
            items={pizza}
            title={'pizza'}
            img={pizzaImg}
            ></MenuCetagory>
            {/* salads menu */}
            <MenuCetagory
            items={salad}
            title={'salad'}
            img={saladImg}
            ></MenuCetagory>
            {/* soup menu */}
            <MenuCetagory
            items={soup}
            title={'soup'}
            img={soupImg}
            ></MenuCetagory>
        </div>
    );  
};

export default Menu;