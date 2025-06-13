export default function SectionHeader({text, style, text2}) {

    return (
       <>
       <div className={`section__header ${style}`}>
        <h2>{text}</h2>
        <p>{text2}</p>
       </div>
       </> 
    )
}