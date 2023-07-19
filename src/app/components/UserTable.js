import { FaEllipsisV } from "react-icons/fa";

function UserTable(props) {
  const {
    sortedUsers,
    filteredUsers,
    displayedRows,
    searchTerm,
    selectedUser,
    handleSort,
    handleSelect,
    handleDelete,
    handleClick,
    showOptions,
  } = props;

  return (
    <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
      <thead>
        <tr className="text-left">
          <th
            className="py-2 px-4 sticky top-0 border-b border-gray-600 bg-gray-300 text-[#011425]"
            onClick={() => handleSort("timestamp")}
          >
            Timestamp
          </th>
          <th
            className="py-2 px-4 sticky top-0 border-b border-gray-600 bg-gray-300 text-[#011425]"
            onClick={() => handleSort("purchase_id")}
          >
            PurchaseID
          </th>
          <th
            className="py-2 px-4 sticky top-0 border-b border-gray-600 bg-gray-300 text-[#011425]"
            onClick={() => handleSort("email")}
          >
            Email
          </th>
          <th
            className="py-2 px-4 sticky top-0 border-b border-gray-600 bg-gray-300 text-[#011425]"
            onClick={() => handleSort("name")}
          >
            Name
          </th>
          <th
            className="py-2 px-4 sticky top-0 border-b border-gray-600 bg-gray-300 text-[#011425]"
            onClick={() => handleSort("source")}
          >
            Source
          </th>
          <th
            className="py-2 px-4 sticky top-0 border-b border-gray-600 bg-gray-300 text-[#011425]"
            onClick={() => handleSort("status")}
          >
            Status
          </th>
          <th className="py-2 px-4 sticky top-0 border-b border-gray-600 bg-gray-300  w-24  text-[#011425]">
            Select
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers &&
          sortedUsers
            .filter((user) => filteredUsers.includes(user))
            .slice(0, displayedRows)
            .filter((user) =>
              Object.values(user)
                .some((value) =>
                  value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            )
            .map((user) => (
              <tr
                key={user.id}
                className={user === selectedUser ? "bg-blue-200" : ""}
              >
                <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                  {user.timestamp}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                  {user.purchase_id}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                  {user.email}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                  {user.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                  {user.source}
                </td>

                <td className="py-2 px-4 relative left-0 border-b border-gray-200 text-gray-600 border-10px">
                  <button
                    className={
                      user.status === "paid"
                        ? "bg-green-400 text-green-800 font-bold py-1 px-4 rounded-full"
                        : user.status === "waiting"
                        ? "bg-yellow-400 text-yellow-700 font-bold py-1 px-4 rounded-full"
                        : "bg-red-400 text-red-700 font-bold py-1 px-4 rounded-full"
                    }
                    style={{ width: "90px" }}
                  >
                    {user.status}
                  </button>
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                  <button
                    className="bg-gray-300 text-sm hover:bg-gray-600 text-[#011425] font-bold py-2 px-4 rounded-full"
                    onClick={() => handleSelect(user)}
                  >
                    Select
                  </button>
                </td>
                <td className="py-2 px-4 text-gray-600">
                  <div className="relative">
                    <FaEllipsisV
                      className="text-black ml-2 cursor-pointer"
                      onClick={handleClick}
                    />
                    {showOptions && user === selectedUser && (
                      <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md py-1 z-10">
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                          Edit
                        </button>
                        <button
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          onClick={() => handleDelete(user)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}
export default  UserTable;