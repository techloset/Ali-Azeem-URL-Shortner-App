"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { fetchData } from "@/app/redux/slices/link";
import Image from "next/image";
import copy from "@/public/assets/copy.svg";
import Active from "@/public/assets/Active.svg";
import QRCode from "qrcode.react";
import axios from "axios";
import toast from "react-hot-toast";
import Del from "@/public/assets/delete.svg";
import Link from "next/link";
import edit from "@/public/assets/edit.svg";
import Loader from "../Load";
import { TableItem } from "@/app/types/types";

const Urls: React.FC = () => {
  const dispatch = useDispatch();
  const { link, loading } = useSelector((state: RootState) => state.link);
  console.log(link);

  const [displayedLink, setDisplayedLink] = useState<TableItem[]>([]);

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  useEffect(() => {
    setDisplayedLink(link);
  }, [link]);
  const handleDeleteList = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/list/${id}`);
      console.log(id);

      toast.success("Task Deleted Successfully");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
    }
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div style={{ maxHeight: "650px", overflowY: "auto" }}>
          <table>
            <thead className="bg-[#0D1117]">
              <tr>
                <th style={{ width: "330.76px", padding: "25px" }}>
                  Short Link
                </th>
                <th style={{ width: "476.76px" }}>Original Link</th>
                <th style={{ width: "137.76px" }}>QR Code</th>
                <th style={{ width: "130.76px" }}>Clicks</th>
                <th style={{ width: "187.76px" }}>Status</th>
                <th style={{ width: "189.76px" }}>Date</th>
                <th style={{ width: "189.76px" }}>Action</th>
              </tr>
            </thead>
            <tbody className="bg-[#181E2938] ">
              {displayedLink.map((item: TableItem, i: number) => (
                <tr key={i}>
                  <td className="pl-[25px]">
                    <a target="_blank" href={item.longUrl}>
                      {item.shortUrl}
                    </a>
                  </td>
                  <td className="flex justify-between w-[476.76px] ">
                    <a target="_blank" href={item.longUrl}>
                      {item.longUrl}
                    </a>

                    <Image src={copy} alt="copy" />
                  </td>
                  <td className="pl-[40px]">
                    <QRCode value={item.longUrl} size={36} />
                  </td>
                  <td className="pl-[65px]">{item.clickCount}</td>
                  <td className="flex justify-center">
                    <Image src={Active} alt="copy" />
                  </td>
                  <td>{item.createdAt}</td>
                  <td>
                    <div className="flex">
                      <div>
                        <Link href="/add">
                          <div>
                            <Image src={edit} alt="Del" />
                          </div>
                        </Link>
                      </div>
                      <div
                        onClick={() => {
                          handleDeleteList(item.id);
                        }}
                      >
                        <Image src={Del} alt="Del" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Urls;
