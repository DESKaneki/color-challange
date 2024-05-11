import { BlendedColor } from "../components/BlendedColor"
import { Color } from "../components/Color"

export const Landing = () => {
    return (<section className="w-full">
        <BlendedColor>
            <Color red={85} green={61} blue={54}></Color>
            <Color red={20} green={74} blue={82}></Color>
            <BlendedColor>
                <Color red={120} green={0} blue={60}></Color>
                <Color red={0} green={60} blue={130}></Color>
            </BlendedColor>
            <BlendedColor>
                <Color red={50} green={40} blue={30}></Color>
                <Color red={140} green={130} blue={120}></Color>
            </BlendedColor>
        </BlendedColor>
       
    </section>)
}