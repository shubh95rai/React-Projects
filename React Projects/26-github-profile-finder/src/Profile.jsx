function Profile({ props }) {
  const { data, loading, errorMessage } = props;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const createdDate = new Date(data.created_at);

  if (loading) {
    return (
      <main className="pt-20">
        <span className="loading loading-spinner text-neutral w-10"></span>
      </main>
    );
  }

  if (errorMessage) {
    return <main className="pt-20">{errorMessage}</main>;
  }

  return (
    <section className="flex flex-col gap-5 items-center bg-white p-10 rounded w-[365px]">
      <img
        src={data.avatar_url}
        alt=""
        className="rounded-full shadow-xl w-[150px] h-[150px]"
      />

      <p>
        Username :{" "}
        <a
          href={data.html_url}
          target="_blank"
          className="underline underline-offset-4 text-blue-600 text-lg">
          {data.login}
        </a>
      </p>
      <p>{`Joined on : ${createdDate.getDate()} ${months[createdDate.getMonth()]} ${createdDate.getFullYear()}`}</p>
      <p>Followers : {data.followers}</p>
      <p>Following : {data.following}</p>
      <p>Public Repos : {data.public_repos}</p>
    </section>
  );
}

export default Profile;
