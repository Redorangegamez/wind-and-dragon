type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-balance font-serif text-4xl leading-[0.98] tracking-[-0.045em] text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-ink/70 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
