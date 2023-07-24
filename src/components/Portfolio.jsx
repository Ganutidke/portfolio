import React from "react";

const Portfolio = () => {
  const links = [
    {
      id: 1,
      imgSrc: "https://colorlib.com/wp/wp-content/uploads/sites/2/videograph-free-template-353x278.jpg",
    },
    {
      id: 2,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOah3LOEDVkz33u2HEbHPloLo6tYQia4svdgOZX8HwcwNUWdh6ITkjV1nZtLd2mZSuA0k&usqp=CAU",
    },
    {
      id: 3,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNQFf80u5pxB6wC8HMzAnu2zSTis5Gzw-k2NDdB7fRO6OM_8XUOA98u3BpGtO58i5lIg&usqp=CAU",
    },
    // {
    //     id: 4,
    //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCsaLsCwihPDtrQdfooXPPqXDnmkdz5HP4KcCL-5odrNRWSuv0gHMoFw5feMl0QtBWus&usqp=CAU",
    // },
    // {
    //     id: 5,
    //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYsx9pj_Opsa0LCZUqVgxvlbQ8TkcGWDtR5GfhKV04qHlFqZIrxBltKh4eEXxN9r9VYo&usqp=CAU",
    // },
    // {
    //     id: 6,
    //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2ce_9ohZs63enxjTdzTFwMEgPMCeRNhqmFDsEVPKFn1KdQ31hXYLPpTCe_JxDAEwpx4&usqp=CAU",
    // },
    // {
    //     id: 7,
    //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GXLWgg4Fpn3ktHdS2AazpqdCdbSHUeQtFSZrHstrTEwQSRUFX6l9JKZX_gZyGQD-tWA&usqp=CAU",
    // },
    // {
    //     id: 8,
    //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrE0Jh09hFcLlN4UsXN_L5K-LyXXPDvrCJjR1d2-SnfXxUGYFXnQcjsg972jlrTKyCZng&usqp=CAU",
    // },
    // {
    //     id: 9,
    //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDPIuqxV5yP3bm8qCFtRwTxzOXfxTkClaLatLXZyY9Pq-WsMyUvVf8YiDoEqyQ-rJttI&usqp=CAU",
    // },
    // {
    //     id: 10,
    //     img: "data:image/jpeg;base64,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",
    // }
  ];

  console.log(links);

  return (
    <div name="portfolio" className='bg-gradient-to-t pt-14  from-black to-gray-800 flex flex-col w-full  items-center text-white md:h-screen h-screen '>
      <div className='w-11/12 mx-auto font-poppins'>
        <div className='pb-1  border-b-2 '>
          <h1 className='font-semibold text-4xl text-gray-400'>Portfolio</h1>
        </div>
      </div>
      <div className="w-11/12  mx-auto font-poppins grid md:grid-cols-3 grid-cols-1 gap-8 mt-14">
        {links.map((link) => (
          <div key={link.id} className="flex w-full flex-col items-center ">
            <div className="">
              <div className="">
                <img
                  src={link.imgSrc}
                  // src="https://s3-alpha.figma.com/hub/file/3723654549/aa188e54-1729-4d8e-b732-ceccbb0a9a9c-cover.png"
                  alt="Done by me sites demo"
                  className="w-96 h-60 rounded-t-lg hover:scale-105 duration-300"
                />
              </div>
              <div className="flex justify-between text-center capitalize">
                <button className="w-1/2 pt-4 pb-3 text-gray-400 duration-300 hover:text-white border-b-2 border-r-2  border-l-2 rounded-es-lg border-cyan-300">
                  Demo
                </button>
                <button className="w-1/2 pt-4 pb-3 border-b-2 border-r-2 rounded-ee-lg text-gray-400 duration-300 hover:text-white border-cyan-300">
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>

  );
};

export default Portfolio;
