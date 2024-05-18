export default function StockPageLayout({ children, inventory, orders }: { children: React.ReactNode, inventory: React.ReactNode, orders: React.ReactNode }) {
    return (
        <div>
            <h1 className="text-2xl font-bold">Stock Page</h1>
            <div className="flex gap-6">
                {children}
                <div className="flex flex-col gap-4">
                    {inventory}
                    {orders}
                </div>
            </div>
        </div>
    );
}