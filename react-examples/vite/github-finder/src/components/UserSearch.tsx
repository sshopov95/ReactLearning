import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGithubUser } from "../api/github";
import UserCard from "./UserCard";
import RecentSearches from "./RecentSearches";

const UserSearch = () => {
  const [username, setUsername] = useState("");
  const [submittedUserName, setSubmittedUsername] = useState("");
  const [recentUsers, setRecentUsers] = useState<string[]>(() => {
    const stored = localStorage.getItem('recentUsers');
    return stored ? JSON.parse(stored) : []; });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", submittedUserName],
    queryFn: () => fetchGithubUser(submittedUserName),
    enabled: !!submittedUserName, //parse as bool
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = username.trim();
    if (!trimmed) return;
    setSubmittedUsername(trimmed);

    setRecentUsers((prev) => {
      const updated = [trimmed, ...prev.filter((u) => u !== trimmed)]; //Filter duplicates
      return updated.slice(0, 5);
    });
  };

  useEffect(()=> {
    localStorage.setItem('recentUsers',JSON.stringify(recentUsers));
  },[recentUsers])
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p className="status">Loading....</p>}
      {isError && <p className="error">{error.message}</p>}

      {data && <UserCard user={data} />}
      {recentUsers.length > 0 && (
        <RecentSearches users={recentUsers} onSelect={(username)=>{
            setUsername(username);
            setSubmittedUsername(username);
        }}/>
      )}
    </>
  );
};

export default UserSearch;
