/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../../../components/navbar/Navbar";
import { useAppSelector } from "../../../utils/redux/hooks";
import { GetOrderItemsByStudentID } from "../../../firebase/hooks";
import { useEffect, useState } from "react";
import { GetOrderDetailsByStudentID } from "../../../firebase/hooks";
const StudentInvoice = () => {
  const { studentIdRedux, firstNameRedux, lastNameRedux } = useAppSelector(
    (state) => state.user
  );
  const [orderItems, setOrderItems] = useState<any>([]);
  const [orderDetails, setOrderDetails] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetOrderItemsByStudentID(studentIdRedux);
      //   console.log(data);
      setOrderItems(data);
    };

    fetchData();
  }, [studentIdRedux]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetOrderDetailsByStudentID(studentIdRedux);
      setOrderDetails(data);
    };

    fetchData();
  }, [studentIdRedux]);

  // console.log(orderDetails);
  return (
    <>
      <Navbar />

      <div className="px-8 py-4 mx-4 my-auto bg-white rounded-md hover:bg-gray-100 lg:mx-10">
        <div className="w-full px-4 py-2 my-3 rounded-md bg-blue-50">
          <h1>
            Thank you {""}
            <span>
              {firstNameRedux} {lastNameRedux}, {""}
            </span>
            <span>your reservation has been accepted.</span>
          </h1>

          <h2 className="text-sm text-gray-600">
            If you have any questions concerning this invoice, use the contact
            page
          </h2>
        </div>

        {/* INVOINCE GRID */}
        <div className="flex items-center justify-between pb-2 mb-5 border-b border-gray-800">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 md:text-2xl">
              Invoice Receipt
            </h2>

            <h2 className="text-xs text-gray-800 font-base">
              INVOINCE NO: {""}
              <span>{orderDetails[0]?.orderNumber}</span>
            </h2>
          </div>

          {/* Col */}
          <div className="inline-flex gap-x-2">
            <a
              className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1={12} x2={12} y1={15} y2={3} />
              </svg>
              Invoice PDF
            </a>
          </div>
        </div>
        {/* END INVOINCE GRID*/}

        {/* Table */}
        <div className="mt-6 space-x-2 space-y-2 border border-gray-500 rounded-lg">
          <div className="hidden bg-gray-200 border rounded-lg sm:grid sm:grid-cols-6 md:py-2 md:px-2">
            <div className="text-sm font-bold text-black uppercase sm:col-span-2">
              ITEM CODE
            </div>
            <div className="text-sm font-bold text-black uppercase text-start">
              ITEM DESCRIPTION
            </div>
            <div className="text-sm font-bold text-black uppercase text-start">
              QUANTITY
            </div>
            <div className="text-sm font-bold text-black uppercase text-start">
              ITEM PRICE
            </div>
            <div className="text-sm font-bold text-red-500 uppercase text-end">
              SUB TOTAL
            </div>
          </div>

          <div className="hidden sm:block" />
          {orderItems.map((item: any) => (
            <div
              className="grid grid-cols-1 space-y-3 sm:grid-cols-6 md:py-2 md:px-2"
              key={item.id}
            >
              <div className="col-span-full sm:col-span-2">
                <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden">
                  ITEM CODE
                </h5>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {item.itemCode}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden">
                  ITEM DESCRIPTION
                </h5>
                <p className="text-gray-800 dark:text-gray-200">
                  {item.itemName}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden">
                  QUANTITY
                </h5>
                <p className="text-gray-800 dark:text-gray-200">
                  {item.quantity}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-medium text-gray-500 uppercase sm:hidden">
                  ITEM PRICE
                </h5>
                <p className="text-gray-800 sm:text-start">
                  ₱ {item.itemPrice}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-medium text-red-500 uppercase sm:hidden">
                  SUB TOTAL
                </h5>
                <p className="text-gray-800 sm:text-end">₱ {item.totalPrice}</p>
              </div>
            </div>
          ))}
        </div>
        {/* END OF TABLE */}

        {/* START OF GRID */}
        <div className="flex mt-8 sm:justify-end">
          <div className="w-full max-w-2xl space-y-2 sm:text-end">
            {/* Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-2">
              <dl className="grid text-sm sm:grid-cols-5 gap-x-3">
                <dt className="col-span-3 text-gray-500">STUDENT ID:</dt>
                <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                  {studentIdRedux}
                </dd>
              </dl>
              <dl className="grid text-sm sm:grid-cols-5 gap-x-3">
                <dt className="col-span-3 text-gray-500">TOTAL AMOUNT:</dt>
                <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                  ₱ {orderDetails[0]?.totalAmount}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentInvoice;
