import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Pagination from "./Pagination";
import Loading from "./Loading";
import Navbar from "./Navbar";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/randomusers?page=${currentPage}`
      );
      const jsonResponse = await response.json();
      const apiData = await jsonResponse.data;
      setTotalPage(apiData.totalPages);
      setUsers(apiData.data);
      setLoading(false);
    })();
  }, [currentPage]);

  return (
    <div className="bg-gray-800 text-white min-h-[100vh]">
      <Navbar />
      <div className="container mx-auto w-[90vw] flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold mb-6 mt-5">All Users</h1>
        {loading && <Loading />}
        <UserCard users={users} />
        <Pagination
          setPage={setCurrentPage}
          currentPage={currentPage}
          totalPage={totalPage}
        />
      </div>
    </div>
  );
}

export default App;
