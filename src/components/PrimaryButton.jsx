export default function PrimaryButton({style, text, action}) {

    return (
        <button className={style} type="submit" >{text}</button>
    )
}