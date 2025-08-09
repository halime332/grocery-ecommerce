import { FC } from "react"
import { FaLeaf } from "react-icons/fa";

interface Props {
    isOrganic: boolean;
}

const OrganicBage: FC<Props> = ({ isOrganic }) => {
    return (
        isOrganic && (
            <div className="absolute items-center top-2  text-sm left-2 bg-green-600 text-white rounded-full flex items-center gap-2 px-2 py-1">
                <FaLeaf />
                <span>Organik</span>
            </div>

        )
    );
};

export default OrganicBage;