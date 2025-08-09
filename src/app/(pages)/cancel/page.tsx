import { IoIosCloseCircle as Close } from "react-icons/io";
import { FC } from "react";
import Link from "next/link";


const SuccessPage: FC = () => {
    return (
        <div className="h-[80vh]">
            <div className="h-[50%] bg-red-500 text-white grid place-items-center">
                <div className="flex flex-col items-center gap-10">
                    <Close className="text-[70px]" />
                    <p className="font-semibold text-4xl tetx-center">Ödeme Başarısız Oldu</p>
                </div>
            </div>


            <div className="h-[50%] p-10 mt-5 text-center text-black ">
                <p className="text-lg">Ödeme işlemi sırasında bir hata oldu</p>



                <br />
                <br />
                <br />

                <Link href="/" className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg hover:bg-gray-100">Ana Sayfaya Dön</Link>
            </div>
        </div>
    );
};

export default SuccessPage;