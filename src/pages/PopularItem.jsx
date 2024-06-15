
import SectionTitle from "../components/SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../Hooks/UseHooks";


const PopularItem = () => {

    const [menu] = useMenu()
    const popular=menu.filter(item=>item.category === 'popular');

   
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid md: grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularItem;