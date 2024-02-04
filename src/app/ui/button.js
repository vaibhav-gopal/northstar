export default function Button({link, text}) {
    return (
        <a
          href={link}
          className="group rounded-3xl bg-[#5B1CBA] border-transparent px-5 py-4 transition-colors hover:border-[#5B1CBA] border-2 hover:bg-transparent"
        >
          <h2 className={`text-2xl font-semibold`}>
            {text}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
    );
}