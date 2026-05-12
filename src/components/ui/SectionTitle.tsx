

interface SectionTitleProps {
    title: string;
    subtitle: string;
}

export default function SectionTitle({title,subtitle} : SectionTitleProps){

    return (
        <div
          className="mb-16">
            <p className="text-sm text-zinc-400 mb-3 tracking-wider uppercase">{subtitle}</p>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
        </div>
    )
}