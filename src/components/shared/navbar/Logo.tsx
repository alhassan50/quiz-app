export default function Logo({selectedCategory}: {selectedCategory: Category}) {
  return (
    <div className="flex gap-4 sm:gap-8 items-center">
        <figure 
            className={`p-2 w-10 h-10 sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] rounded-[6px]`}
            style={{ backgroundColor: selectedCategory.color }}
        >
            <img 
                src={selectedCategory.icon}
                alt={selectedCategory.title}
                className="w-full h-full"
            />
        </figure>
        <h3 className="">
            {selectedCategory.title}
        </h3>
    </div>
  )
}
