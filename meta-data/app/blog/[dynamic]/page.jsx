export async function generateMetadata({params}) {
    const {dynamic} = await params
    return {
        title: `Blog ${dynamic}`
    }
}

export default async function Page({params}) {
    const {dynamic} = await params
    return (
        <div>
            <h1>Dynamic Blog Post: {dynamic}</h1>
        </div>
    )
}