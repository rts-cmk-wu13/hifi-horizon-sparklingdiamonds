export default function HomeButton({text, style, icon}) {

    return (
        <button className={style}>{text} {icon}</button>
    )
}