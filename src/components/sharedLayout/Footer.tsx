

const Footer = () => {
    return (
      <section className=" border-t-3 border-[#F0F5EF]">
            <div className="container mx-auto  py-6 md:py-7 lg:py-9 px-4 md:px-5 lg:px-0">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2">
                    <div>
                        <p className="text-sm md:text-sm lg:text-xl">বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                    </div>
                    <div>
                        <p className="text-sm md:text-sm lg:text-xl">সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default Footer;