export default function CountryPageLayout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode}) {
    return <>
        <h1>Countries Layout</h1>
        {children}
        {modal}
    </>
}