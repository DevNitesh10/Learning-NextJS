export default function ColourBoxLayout({children, left, right}){
    const isSidebar = true;
    return (
    <section>
        {children}
        {/* {left}
        {right} */}
        {isSidebar ? left : right}
    </section>
    )
}