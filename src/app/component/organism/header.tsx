const Header = () => {
  return (
    <nav className="m-[50px]">
      <div className="max-w-60 m-auto flex gap-11 justify-around text-2xl">
        <a href="/">Home</a>
        <a href="/server">server</a>
        <a href="/client">client</a>
      </div>
    </nav>
  );
};

export default Header;
