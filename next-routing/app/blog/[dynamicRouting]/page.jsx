export default async function DynamicRouting({params}) {
    console.log("Params", await params);
    const { dynamicRouting } = await params;
    return (
        <div>
            <h1>Dynamic Routing:- {dynamicRouting}</h1> <br />
            <p>This is a dynamic routing page. The URL of this page is <code>/blog/[dynamicRouting]</code>.</p>
        </div>
    )
}