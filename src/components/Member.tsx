import React from "react";

const Member = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center bg-one items-center bg-fixed bg-no-repeat  bg-cover bg-center ">
        <div className="w-[70rem] h-72 bg-white flex gap-10 justify-center items-center">
          <div className="w-[30rem] flex justify-center text-5xl font-semibold">
            Become Member
          </div>
          <div className="w-[40rem] text-2xl font-light flex flex-col justify-center">
            <p>
              Enjoy exclusive events, unlimited access to exhibitions and the
              Members&apos; Room, plus discounts in the Museum shops, cafés and
              restaurants.
            </p>
            <div className="flex justify-start items-start">
              <button className="w-auto h-auto px-5 mt-5 text-xl py-2 bg-black text-white">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
