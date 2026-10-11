"use client";

const CurrentDate = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
    return (
        <div>
            <p className="mt-1 text-[10px] md:text-xs lg:text-sm font-semibold">{date}</p>
        </div>
    );
};

export default CurrentDate;