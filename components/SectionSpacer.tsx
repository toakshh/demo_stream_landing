interface SectionSpacerProps {
  background?: string
  className?: string
}

export default function SectionSpacer({ 
  background = '#000', 
  className = 'w-full py-8 md:py-12' 
}: SectionSpacerProps) {
  return (
    <section className={className} style={{ background }}>
      <div className="w-[1px] h-32 md:h-64 m-auto bg-white" />
    </section>
  )
}