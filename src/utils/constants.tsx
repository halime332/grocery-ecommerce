import { FaLeaf, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const options = [
    {
        title: "Hızlı Teslimat",
        description: "Aynı gün teslimat",
        icon: <MdLocalShipping />,
        bgColor: "bg-blue-100"
    },

    {
        title: "Taze Ürünler",
        description: "Günlük taze ürünler",
        icon: <FaLeaf />,
        bgColor: "bg-green-100"
    },

    {
        title: "Hızlı Teslimat",
        description: "Aynı gün teslimat",
        icon: <FaMoneyBillWave />,
        bgColor: "bg-yellow-100"
    },

    {
        title: "Güvenli Alışveriş",
        description: "Güvenli Alışveriş",
        icon: <FaShieldAlt />,
        bgColor: "bg-red-100"
    },
];

export { options };