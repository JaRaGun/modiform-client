import Navbar from "../../../components/navbar/Navbar";

const StudentInvoice = () => {
  return (
    <>
      <Navbar />

      <div className="bg-white hover:bg-gray-100 px-8 py-4 mx-4 lg:mx-10 rounded-md my-auto">
        <div className="my-3 w-full bg-blue-50 py-2 px-4 rounded-md">
          <h1>
            Thank you {""}
            <span>Jeselle V. Vitoria, {""}</span>
            <span>your reservation has been accepted.</span>
          </h1>

          <h2 className="text-sm text-gray-600">
            If you have any questions concerning this invoice, use the contact
            page
          </h2>
        </div>

        {/* INVOINCE GRID */}
        <div className="mb-5 pb-2 flex justify-between items-center border-b border-gray-800">
          <div>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
              Invoice Receipt
            </h2>

            <h2 className="text-xs font-base text-gray-800">
              INVOINCE NO: {""}
              <span>#1231</span>
            </h2>
          </div>

          {/* Col */}
          <div className="inline-flex gap-x-2">
            <a
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
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
        <div className="mt-6 border border-gray-500 rounded-lg space-y-2">
          <div className="hidden sm:grid sm:grid-cols-6 bg-gray-200 border md:py-2 md:px-2 rounded-lg">
            <div className="sm:col-span-2 text-sm text-black font-bold uppercase">
              ITEM CODE
            </div>
            <div className="text-start text-sm text-black font-bold uppercase">
              ITEM DESCRIPTION
            </div>
            <div className="text-start text-sm text-black font-bold uppercase">
              QUANTITY
            </div>
            <div className="text-start text-sm text-black font-bold uppercase">
              ITEM PRICE
            </div>
            <div className="text-end text-sm text-red-500 font-bold uppercase">
              SUB TOTAL
            </div>
          </div>

          <div className="hidden sm:block" />
          <div className="grid grid-cols-1 sm:grid-cols-6 space-y-3 md:py-2 md:px-2">
            <div className="col-span-full sm:col-span-2">
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                ITEM CODE
              </h5>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                IT10101
              </p>
            </div>

            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                ITEM DESCRIPTION
              </h5>
              <p className="text-gray-800 dark:text-gray-200">IT PANTS</p>
            </div>

            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                QUANTITY
              </h5>
              <p className="text-gray-800 dark:text-gray-200">3</p>
            </div>

            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                ITEM PRICE
              </h5>
              <p className="sm:text-start text-gray-800">₱334</p>
            </div>

            <div>
              <h5 className="sm:hidden text-xs font-medium text-red-500 uppercase">
                SUB TOTAL
              </h5>
              <p className="sm:text-end text-gray-800">₱23</p>
            </div>
          </div>
        </div>
        {/* END OF TABLE */}

        {/* START OF GRID */}
        <div className="mt-8 flex sm:justify-end">
          <div className="w-full max-w-2xl sm:text-end space-y-2">
            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
              <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                <dt className="col-span-3 text-gray-500">STUDENT ID:</dt>
                <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                  020000202
                </dd>
              </dl>
              <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                <dt className="col-span-3 text-gray-500">TOTAL AMOUNT:</dt>
                <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                  ₱23
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
