export default function UserServicePage() {
    const services =
        [
            {
                id: 1,
                fullName: "Iqrar Ahmed Soomro",
                service: "Vehicle Transfer Application",
                fees: 1000,
            },
            {
                id: 1,
                fullName: "Faraz Ahmed ",
                service: "new Passport Application",
                fees: 1000,
            },
            {
                id: 1,
                fullName: "Shabeeh  Haider ",
                service: "Passport Application",
                fees: 1000,
            },
            {
                id: 1,
                fullName: "Shabeeh  Haider ",
                service: " vehicle Transfer and Passport Application",
                fees: 1000,
            },
            {
                id: 1,
                fullName: "Shabeeh  Haider ",
                service: " vehicle Transfer and Passport Application",
                fees: 1000,
            },

        ]



    return (
        <div className="grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
            <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white">
                User Services
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full table-fixed">
                    <thead>
                        <tr className="border-none uppercase bg-gray-100 dark:bg-gray-700">
                            {/*       <th className="w-1/4 text-left py-3 px-4">ID</th>
 */}      <th className="w-1/4 text-left py-3 px-4">Full Name</th>
                            <th className="w-1/4 text-center py-3 px-4">Service</th>
                            <th className="w-1/4 text-right py-3 px-4">Fees</th>
                        </tr>
                    </thead>

                    <tbody>
                        {services.map((item, i) => (
                            <tr
                                key={i}
                                className="text-base font-medium text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                {/*                 <td className="w-1/4 text-left py-2 px-4 break-words">{item.id}</td>
 */}                <td className="w-1/4 text-left py-2 px-4 break-words">{item.fullName}</td>
                                <td className="w-1/4 text-center py-2 px-4 break-words">{item.service}</td>
                                <td className="w-1/4 text-right text-green-500 py-2 px-4">{item.fees}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}