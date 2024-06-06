// "use client";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/app/redux/store";
// import { fetchData } from "@/app/redux/slices/link";
// import Image from "next/image";
// import copy from "@/public/assets/copy.svg";
// import Active from "@/public/assets/Active.svg";
// import QRCode from "qrcode.react";
// import Loader from "../Load";
// import { Props, TableItem } from "@/app/types/types";
// import Link from "next/link";

// const Urls: React.FC<Props> = ({ displayCount }) => {
//   const dispatch = useDispatch();
//   const { link, loading } = useSelector((state: RootState) => state.link);
//   console.log(link);

//   const [displayedLink, setDisplayedLink] = useState<TableItem[]>([]);

//   useEffect(() => {
//     dispatch(fetchData() as any);
//   }, [dispatch]);

//   useEffect(() => {
//     setDisplayedLink(link.slice(0, displayCount));
//   }, [link, displayCount]);

//   return (
//     <div>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div style={{ maxHeight: "500px", overflowY: "auto" }}>
//           <table>
//             <thead className="bg-[#181E29]">
//               <tr>
//                 <th style={{ width: "330.76px", padding: "25px" }}>
//                   Short Link
//                 </th>
//                 <th style={{ width: "476.76px" }}>Original Link</th>
//                 <th style={{ width: "137.76px" }}>QR Code</th>
//                 <th style={{ width: "130.76px" }}>Clicks</th>
//                 <th style={{ width: "187.76px" }}>Status</th>
//                 <th style={{ width: "189.76px" }}>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <span className="loader"></span>
//               ) : (
//                 displayedLink.map((item, i) => (
//                   <tr key={i}>
//                     <td>
//                       <Link href={item.longUrl} target="_blank">
//                         https://{item.shortUrl}.com/
//                       </Link>
//                     </td>
//                     <td className="flex justify-between">
//                       <Link href={item.longUrl} target="_blank">
//                         {item.longUrl}
//                       </Link>
//                       <Image src={copy} alt="copy" />
//                     </td>
//                     <td className="pl-[40px]">
//                       <QRCode value={item.longUrl} size={36} />
//                     </td>
//                     <td className="pl-[65px]">{item.clickCount}</td>
//                     <td className="flex justify-center">
//                       <Image src={Active} alt="copy" />
//                     </td>
//                     <td>{item.createdAt}</td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Urls;
//
//
//
"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { fetchData } from "@/app/redux/slices/link";
import Image from "next/image";
import copy from "@/public/assets/copy.svg";
import DropDown from "@/public/assets/dropDown.svg";
import Active from "@/public/assets/Active.svg";
import QRCode from "qrcode.react";
import Loader from "../Load";
import { Props, TableItem } from "@/app/types/types";
import Link from "next/link";

const Urls: React.FC<Props> = ({ displayCount }) => {
  const dispatch = useDispatch();
  const { link, loading } = useSelector((state: RootState) => state.link);
  console.log(link);

  const [displayedLink, setDisplayedLink] = useState<TableItem[]>([]);

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  useEffect(() => {
    setDisplayedLink(link.slice(0, displayCount));
  }, [link, displayCount]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="sm:max-h-[500px] overflow-y-auto ">
          <table className="min-w-[100px]">
            <thead className="bg-[#181E29]">
              <tr>
                <th className="sm:w-[330.76px] w-[376px] p-[25px] rounded-t-[10px] sm:rounded-none ">
                  Short Link
                </th>
                <th className="w-[476.76px] hidden sm:table-cell">
                  Original Link
                </th>
                <th className="w-[137.76px] hidden sm:table-cell">QR Code</th>
                <th className="w-[130.76px] hidden sm:table-cell">Clicks</th>
                <th className="w-[187.76px] hidden sm:table-cell">Status</th>
                <th className="w-[189.76px] hidden sm:table-cell">Date</th>
              </tr>
            </thead>
            <tbody className="bg-[#181E2938] ">
              {loading ? (
                <span className="loader"></span>
              ) : (
                displayedLink.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <div className="flex p-[25px] justify-between align-center ">
                        <Link href={item.longUrl} target="_blank">
                          https://{item.shortUrl}.com/
                        </Link>
                        <span className="bg-[#1C283FB0] p-[15px] py-[17px] sm:hidden rounded-full ">
                          <Image src={DropDown} alt="copy" />
                        </span>
                      </div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <Link href={item.longUrl} target="_blank">
                        <div className="flex justify-between">
                          {item.longUrl}
                          <Image src={copy} alt="copy" />
                        </div>
                      </Link>
                    </td>
                    <td className="pl-[40px] hidden sm:table-cell">
                      <QRCode value={item.longUrl} size={36} />
                    </td>
                    <td className="pl-[65px] hidden sm:table-cell">
                      {item.clickCount}
                    </td>
                    <td className="flex justify-center hidden sm:table-cell">
                      <Image src={Active} alt="copy" />
                    </td>
                    <td className="hidden sm:table-cell pl-[25px] ">
                      {item.createdAt}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Urls;
