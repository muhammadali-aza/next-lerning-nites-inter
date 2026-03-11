export default async function Comments({params}) {
    console.log("Params", await params);
    const { dynamicRouting } = await params;
    return (
        <div>
            <h1>Comments Page:- {dynamicRouting}</h1>
        </div>
    )
}