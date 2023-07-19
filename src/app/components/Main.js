import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import SearchFilterComponent from "./SearchFilter"
import BookingFormComponent from "./AddBooking"
import UserTable from "./UserTable";

export default function Users() {
	const [users, setUsers] = useState([]);
	const [sortColumn, setSortColumn] = useState(null);
	const [sortDirection, setSortDirection] = useState("asc");
	const [selectedUser, setSelectedUser] = useState(null);
	const [showOptions, setShowOptions] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [showForm, setShowForm] = useState(false);
	const [newBooking, setNewBooking] = useState({});
	const [selectedFilter, setSelectedFilter] = useState("All");
	const [displayedRows, setDisplayedRows] = useState(10);

	const handleFilterChange = (event) => {
		setSelectedFilter(event.target.value);

		if (event.target.value === "Option 1") {
			setDisplayedRows(users.filter((user) => user.status === "paid").length);
		} else if (event.target.value === "Option 2") {
			setDisplayedRows(
				users.filter((user) => user.status === "waiting").length
			);
		} else if (event.target.value === "Option 3") {
			setDisplayedRows(users.filter((user) => user.status === "failed").length);
		} else {
			setDisplayedRows(users.length);
		}
	};
	const filteredUsers = users.filter((user) => {
		if (selectedFilter === "All") {
			return true;
		} else if (selectedFilter === "Option 1") {
			return user.status === "paid";
		} else if (selectedFilter === "Option 2") {
			return user.status === "waiting";
		} else if (selectedFilter === "Option 3") {
			return user.status === "failed";
		}
	});

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleClick = (event) => {
		event.stopPropagation();
		setShowOptions(!showOptions);
	};

	useEffect(() => {
		axios
			.get("https://mocki.io/v1/f9cd2a76-7d43-4b54-953a-b2fd674d7ae2")
			.then((response) => setUsers(response.data))
			.catch((error) => console.log(error));
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		setUsers((prev) => [...prev, newBooking]);
		setShowForm(false);
		setNewBooking({});
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNewBooking({ ...newBooking, [name]: value });
	};

	const handleSort = (column) => {
		if (sortColumn === column) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortColumn(column);
			setSortDirection("asc");
		}
	};

	const handleSelect = (user) => {
		if (selectedUser === user) {
			setSelectedUser(null);
		} else {
			setSelectedUser(user);
		}
	};

	const sortedUsers = useMemo(
		() => sortUsers(),
		[users, sortDirection, sortColumn]
	);

	function sortUsers() {
		console.log("sorting");
		return users.slice().sort((a, b) => {
			if (sortColumn === null) return 0;
			const aValue = a[sortColumn];
			const bValue = b[sortColumn];
			if (sortColumn === "timestamp") {
				const aDate = new Date(aValue);
				const bDate = new Date(bValue);
				const aMinutesAgo = Math.floor((new Date() - aDate) / 60000);
				const bMinutesAgo = Math.floor((new Date() - bDate) / 60000);
				const diff =
					sortDirection === "asc"
						? aMinutesAgo - bMinutesAgo
						: bMinutesAgo - aMinutesAgo;
				return sortDirection === "asc" ? diff : -diff;
			} else if (typeof aValue === "string") {
				return sortDirection === "asc"
					? aValue.localeCompare(bValue)
					: bValue.localeCompare(aValue);
			} else {
				return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
			}
		});
	}

	console.log(sortedUsers, "ssss", users);

	return (
		<div className="bg-gray-100 min-h-screen relative flex items-center justify-center">
			<div className="container mx-auto py-8">
				<SearchFilterComponent
					searchTerm={searchTerm}
					handleSearch={handleSearch}
					selectedFilter={selectedFilter}
					handleFilterChange={handleFilterChange}
				/>
				<h3 className="relative ml-14 mt-8  text-3xl font-bold mb-8 text-gray-800">
					Bookings
				</h3>
				<div className="relative  ml-16 mr-28 mb-4 h-16 p-2 border border-gray-300 bg-white rounded-lg flex items-center justify-between">
					<div className="ml-4 text-[#011425] font-bold ">Add New Booking</div>
					<div
						className="mr-4 bg-green-400 rounded-full w-10 h-10 flex items-center justify-center"
						onClick={() => setShowForm(true)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 4v16m8-8H4"
							/>
						</svg>
					</div>
				</div>
				{showForm && (
					<BookingFormComponent
						handleInputChange={handleInputChange}
						handleSubmit={handleSubmit}
						setShowForm={setShowForm}
						newBooking={newBooking}
					/>
				)}
				<div className="relative lg:ml-14  lg:mr-28 sm:left-5 md:ml-6  overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
					<UserTable
						sortedUsers={sortedUsers}
						filteredUsers={filteredUsers}
						displayedRows={displayedRows}
						searchTerm={searchTerm}
						selectedUser={selectedUser}
						handleSort={handleSort}
						handleSelect={handleSelect}

						handleClick={handleClick}
						showOptions={showOptions}
					/>


				</div>
			</div>
		</div>
	);
}