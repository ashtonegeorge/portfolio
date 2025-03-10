import Image from "next/image"
export default function TechCard(props) {
    return (
        <div className="bg-stone-900 flex justify-between md:shadow-md md:shadow-black p-2 align-middle rounded-xl">
            <Image src={props.img} alt={props.label} className="max-w-16 p-2 rounded-xl bg-stone-50 aspect-auto mr-2" />
            <div className="w-3/4 my-auto">
                <h2 className="font-bold text-xl">{props.label}</h2>
                <p className="text-sm">{props.desc}</p>
            </div>
        </div>
    )
}