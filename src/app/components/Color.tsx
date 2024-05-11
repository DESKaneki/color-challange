interface Color {
    red: number,
    green: number,
    blue: number
}

export const Color = ({red, green, blue}: Color) => {

    const backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    return (
        <div style={{backgroundColor, padding: '20px'}}></div>
    )
}