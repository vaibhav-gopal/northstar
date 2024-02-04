export default function Button({link, text}) {
    return (
        <a
          href={link}
          className="block group rounded-full bg-[#5B1CBAFF] border-transparent px-12 py-4 transition-colors hover:border-[#5B1CBA] border-2 hover:bg-[#5B1CBA66] w-fit h-fit"
        >
          <h2 className={`text-2xl font-semibold`}>
            {text}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </h2>
        </a>
    );
}