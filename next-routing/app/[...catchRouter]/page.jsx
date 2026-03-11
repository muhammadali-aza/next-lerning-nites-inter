export default async function CatchAllRouting({params}) {
    console.log("Params", await params);
    return (
        <div>
            <h1>Catch All Routing</h1>
            <p>This page will catch all routes that are not defined in the application.</p>
        </div>
    )
}