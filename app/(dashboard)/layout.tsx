
export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-5 p-7">
            <div className="p-7 grid">
                {children}
            </div>
        </div>
    );
}