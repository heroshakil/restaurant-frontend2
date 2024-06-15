

import UseAuth from "../pages/Order/UseAuth";
import { data } from "autoprefixer";
import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";


const useCart = () => {
    const axiosSecure = UseAxios()
    const { user } = UseAuth



    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts/${user.email}`)
            console.log(cart);
            console.log(res.data);
            return res.data;

        }
    })
    return [cart, refetch]
};

export default useCart;