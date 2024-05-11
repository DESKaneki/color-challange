import { useEffect, useState } from "react"

export const BlendedColor = ({children}: any) => {
    const [blockcolor, setBlockColor] = useState<any>({});
    let blockcolortemp = {red: 0, green: 0, blue: 0};
    let blendedTotaltemp = {red: 0, green: 0, blue: 0};
    useEffect(() => {
        children.forEach((jsxElement: any) => {
            if(!jsxElement.props.children) {
                blendedTotaltemp.red = blendedTotaltemp?.red + jsxElement?.props?.red
                blendedTotaltemp.green = blendedTotaltemp?.green + jsxElement?.props?.green
                blendedTotaltemp.blue = blendedTotaltemp?.blue + jsxElement?.props?.blue
            }
        });   
        blockcolortemp.red = blendedTotaltemp?.red/children.length;
        blockcolortemp.green = blendedTotaltemp?.green/children.length;
        blockcolortemp.blue = blendedTotaltemp?.blue/children.length;

        setBlockColor(blockcolortemp)
    }, [setBlockColor])

    useEffect(() => {
        console.log(children, blockcolor)
    })

    const backgroundColor = `rgb(${blockcolor?.red}, ${blockcolor?.green}, ${blockcolor?.blue})`
    return (<div style={{backgroundColor, marginTop: '20px'}} className="w-full p-3">
        {children}
    </div>)
}